import * as core from '@actions/core'

import cheerio from 'cheerio'
import moment from 'moment'

import { ColorPalette, ConfigOptions, ContributionGraphData, Position } from '../typings/domain-types'
import { ChartType, ColorSchemeType, DayOfWeekType } from '../typings/enum-types'

import { getProperty, getRequiredProperty } from './utils/properties'
import { serialize } from './utils/serializers'
import { formatParams } from './utils/formatters'
import { fetchAsText } from './utils/requests'
import { storeData } from './utils/files'

import { coreError, handleError } from './utils/loggers'
import { profile } from './utils/profiles'

import { COLOR_SCHEMES } from './constants/constants'

const parseUserContribution = (content: string, colorPalette: ColorPalette): ContributionGraphData => {
    const $ = cheerio.load(content)

    // parse cells
    const rawCells = $('.js-calendar-graph rect[data-count]')
        .toArray()
        .map(x => {
            const level = 'attribs' in x ? +x.attribs['data-level'] : 0
            const count = 'attribs' in x ? +x.attribs['data-count'] : 0
            const date = 'attribs' in x ? x.attribs['data-date'] : 0

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
    if (!elem || ('tagName' in elem && elem.tagName === 'svg')) {
        return { x: 0, y: 0 }
    }

    const position = getSvgPosition(elem.parent)

    if ('attribs' in elem && elem.attribs.x) position.x += +elem.attribs.x
    if ('attribs' in elem && elem.attribs.y) position.y += +elem.attribs.y

    if ('attribs' in elem && elem.attribs.transform) {
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

        const baseUrl = profile.requestOptions.githubRequest.url

        const dateParams = 'year' in dateRange || 'from' in dateRange || 'to' in dateRange
        const url = dateParams
            ? `${baseUrl}/users/${userName}/contributions?${formatParams(dateRange)}`
            : `${baseUrl}/${userName}`

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
    const chartType = ChartType[getProperty('chartType')] || profile.chartOptions.chartType

    const from = getProperty('startDate') || moment().subtract(7, 'days').toDate()
    const to = getProperty('endDate') || moment().subtract(1, 'days').toDate()

    const fileName = getProperty('name') || profile.resourceOptions.fileName
    const filePath = getProperty('path') || profile.resourceOptions.filePath

    const colorOptions = { colorScheme }
    const chartOptions = { chartType }
    const resourceOptions = { fileName, filePath }
    const accountOptions = { userName, dateRange: { from, to } }

    return {
        colorOptions,
        chartOptions,
        resourceOptions,
        accountOptions,
    }
}

const runOperation = async (): Promise<void> => {
    const options = buildConfigOptions()

    const result = await getContributions(options)

    const groupedDates = result.cells
        .filter(c => {
            const d = moment(c.date)
            const from = moment(
                'from' in options.accountOptions.dateRange ? options.accountOptions.dateRange.from : 0
            )
            const to = moment(
                'to' in options.accountOptions.dateRange ? options.accountOptions.dateRange.to : 0
            )

            return d.isBetween(from, to, 'days', '[]')
        })
        .reduce((acc, item) => {
            // create a composed key: 'year-week'
            const yearWeek = `#${moment(item.date).week()} [${moment(item.date).year()}]`

            // add this key as a property to the result object
            if (!acc[yearWeek]) {
                acc[yearWeek] = []
            }

            // push the current date that belongs to the year-week calculated before
            acc[yearWeek].push([moment(item.date).weekday(), item.count])

            return acc
        }, {})

    const rows: number[][] = []
    const columns: string[] = []
    for (const [key, values] of Object.entries<number[][]>(groupedDates)) {
        columns.push(key)

        const entries = Object.fromEntries(values)
        const counts: number[] = Object.keys(DayOfWeekType)
            .filter(x => Number.parseInt(x) >= 0)
            .map(k => entries[k])

        rows.push(counts)
    }

    const values = {
        z: rows,
        y: columns,
        x: Object.keys(DayOfWeekType).filter(x => !(Number.parseInt(x) >= 0)),
        type: options.chartOptions.chartType,
    }

    const url = `${profile.requestOptions.chartRequest.url}?mode=raw`
    const fileData = await fetchAsText(url, {
        body: `data=${Buffer.from(serialize({ data: [values] })).toString('base64')}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'post',
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

process.on('unhandledRejection', handleError)

run()
