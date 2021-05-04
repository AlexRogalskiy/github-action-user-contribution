import * as core from '@actions/core'

import cheerio from 'cheerio'
import moment from 'moment'

import {
    ColorPalette,
    ConfigOptions,
    ContributionGraphData,
    Position
} from '../typings/domain-types'
import { ColorSchemeType } from '../typings/enum-types'

import { getProperty, getRequiredProperty } from './utils/properties'
import { serialize } from './utils/serializers'
import { formatParams } from './utils/formatters'
import { fetchAsText } from './utils/requests'
import { storeData } from './utils/files'

import { coreError } from './utils/loggers'
import { profile } from './utils/profiles'

import { COLOR_SCHEMES, DAYS_OF_WEEK } from './constants/constants'

const parseUserContribution = (content: string, colorPalette: ColorPalette): ContributionGraphData => {
    const $ = cheerio.load(content)

    // parse cells
    const rawCells = $('.js-calendar-graph rect[data-count]')
        .toArray()
        .map(x => {
            const level = +x.attribs['data-level']
            const count = +x.attribs['data-count']
            const date = x.attribs['data-date']

            const color = colorPalette[level]

            if (!color) {
                throw new Error('could not determine the color of the cell')
            }

            return {
                svgPosition: getSvgPosition(x),
                color,
                count,
                date,
            }
        })

    const xMap: Record<number, true> = {}
    const yMap: Record<number, true> = {}

    for (const { svgPosition } of rawCells) {
        xMap[svgPosition.x] = true
        yMap[svgPosition.y] = true
    }

    const xRange = Object.keys(xMap)
        .map(x => +x)
        .sort((a, b) => +a - +b)
    const yRange = Object.keys(yMap)
        .map(x => +x)
        .sort((a, b) => +a - +b)

    const cells = rawCells.map(({ svgPosition, ...rest }) => ({
        ...rest,
        x: xRange.indexOf(svgPosition.x),
        y: yRange.indexOf(svgPosition.y),
    }))

    return { cells, colorPalette }
}

// returns the position of the svg elements, accounting for it's transform and it's parent transform
const getSvgPosition = (elem: cheerio.Element): Position => {
    if (!elem || elem.tagName === 'svg') {
        return { x: 0, y: 0 }
    }

    const position = getSvgPosition(elem.parent)

    if (elem.attribs.x) position.x += +elem.attribs.x
    if (elem.attribs.y) position.y += +elem.attribs.y

    if (elem.attribs.transform) {
        const match = elem.attribs.transform.match(/translate\( *([\d.]+) *, *([\d.]+) *\)/)

        if (match) {
            position.x += +match[1]
            position.y += +match[2]
        }
    }

    return position
}

const getContributions = async (options: ConfigOptions): Promise<ContributionGraphData> => {
    try {
        const {
            accountOptions: { userName, dateRange },
            colorOptions,
        } = options

        const dateParams = 'year' in dateRange || 'from' in dateRange || 'to' in dateRange
        const url = dateParams
            ? `${profile.requestOptions.githubRequest.url}/users/${userName}/contributions?${formatParams(dateRange)}`
            : `${profile.requestOptions.githubRequest.url}/${userName}`

        const resText = await fetchAsText(url)

        const colorScheme = [...COLOR_SCHEMES[colorOptions.colorScheme]]

        return parseUserContribution(resText, colorScheme)
    } catch (error) {
        coreError(`Cannot process input user options: ${serialize(options)}`)
        throw error
    }
}

const buildConfigOptions = (): ConfigOptions => {
    const userName = getRequiredProperty('userName')

    const colorScheme = ColorSchemeType[getProperty('colorScheme')] || profile.colorOptions.colorScheme

    const from = getProperty('startDate')
    const to = getProperty('endDate')

    const fileName = getProperty('name') || profile.resourceOptions.fileName
    const filePath = getProperty('path') || profile.resourceOptions.filePath

    const colorOptions = { colorScheme }
    const resourceOptions = { fileName, filePath }
    const accountOptions = { userName, dateRange: { from, to } }

    return {
        colorOptions,
        resourceOptions,
        accountOptions,
    }
}

const runOperation = async (): Promise<void> => {
    const options = buildConfigOptions()

    const result = await getContributions(options)

    const groupedDates = result.cells
        .filter(c => c.date >= options.accountOptions.dateRange['from'] && c.date <= options.accountOptions.dateRange['to'])
        .reduce((acc, item) => {
            // create a composed key: 'year-week'
            const yearWeek = `#${moment(item.date).week()} [${moment(item.date).year()}]`

            // add this key as a property to the result object
            if (!acc[yearWeek]) {
                acc[yearWeek] = []
            }

            // push the current date that belongs to the year-week calculated before
            acc[yearWeek].push(item.count)

            return acc
        }, {})

    const rows: number[][] = []
    const columns: string[] = []
    for (const [key, value] of Object.entries<number[]>(groupedDates)) {
        rows.push(value)
        columns.push(key)
    }

    const values = {
        'z': rows,
        'y': columns,
        'x': DAYS_OF_WEEK,
        'type': 'heatmap'
    }

    const url = `${profile.requestOptions.chartRequest.url}?mode=raw`
    const fileData = await fetchAsText(url, {
        body: `data=${Buffer.from(serialize({ data: [values] })).toString('base64')}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post'
    })

    const imagePath = storeData(options.resourceOptions.filePath, options.resourceOptions.fileName, fileData)

    core.setOutput('image', imagePath)
}

export default async function run(): Promise<void> {
    try {
        await runOperation()
    } catch (error) {
        coreError(`Cannot process input data, message: ${error.message}`)
    }
}

run()
