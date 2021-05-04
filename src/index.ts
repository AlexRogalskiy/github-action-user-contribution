import * as core from '@actions/core'
import cheerio from 'cheerio'

import { ColorPalette, ConfigOptions, ContributionGraphData, Position } from '../typings/domain-types'
import { ColorSchemeType } from '../typings/enum-types'

import { getProperty, getRequiredProperty } from './utils/properties'
import { serialize } from './utils/serializers'
import { formatParams } from './utils/formatters'
import { fetchAsText } from './utils/requests'

import { coreError } from './utils/loggers'
import { profile } from './utils/profiles'

import { COLOR_SCHEMES } from './constants/constants'

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

const processOperation = async (options: ConfigOptions): Promise<ContributionGraphData> => {
    try {
        const {
            accountOptions: { userName, dateRange },
            colorOptions,
        } = options

        const dateParams = 'year' in dateRange || 'from' in dateRange || 'to' in dateRange
        const url = dateParams
            ? `${profile.requestOptions.url}/users/${userName}/contributions?${formatParams(dateRange)}`
            : `${profile.requestOptions.url}/${userName}`

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

    const colorOptions = { colorScheme }
    const accountOptions = { userName, dateRange: { from, to } }

    return {
        colorOptions,
        accountOptions,
    }
}

const runOperation = async (): Promise<ContributionGraphData> => {
    const options = buildConfigOptions()

    return await processOperation(options)
}

export default async function run(): Promise<void> {
    try {
        await runOperation()
    } catch (error) {
        core.setFailed(`Cannot process input user data, message: ${error.message}`)
    }
}

run()
