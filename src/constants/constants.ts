import boxen from 'boxen'

import {
    ColorOptions,
    ColorScheme,
    RequestOptions,
    RequestInfo,
    ResourceOptions
} from '../../typings/domain-types'
import { ColorSchemeType } from '../../typings/enum-types'

/**
 * Days of week
 */
export const DAYS_OF_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

/**
 * Supported color schemes
 */
export const COLOR_SCHEMES: Readonly<ColorScheme> = {
    red: ['#edebf0', '#e99ba8', '#c44063', '#a1304e', '#216e39'],
    green: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    blue: ['#ebf0ed', '#9ba8e9', '#4063c4', '#304ea1', '#216e39'],
}

/**
 * Chart request configuration options
 */
export const CHART_REQUEST_OPTIONS: Readonly<RequestInfo> = {
    url: 'https://styled-charts.vercel.app/api',
}

/**
 * GitHub request configuration options
 */
export const GITHUB_REQUEST_OPTIONS: Readonly<RequestInfo> = {
    url: 'https://github.com',
}

/**
 * Request configuration options
 */
export const REQUEST_OPTIONS: Readonly<RequestOptions> = {
    githubRequest: GITHUB_REQUEST_OPTIONS,
    chartRequest: CHART_REQUEST_OPTIONS
}

/**
 * Output configuration options
 */
export const OUTPUT_OPTIONS: Readonly<boxen.Options> = {
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    borderColor: 'yellow',
}

/**
 * Color configuration options
 */
export const COLOR_OPTIONS: Readonly<ColorOptions> = {
    colorScheme: ColorSchemeType.green,
}

/**
 * Resource configuration options
 */
export const RESOURCE_OPTIONS: Readonly<ResourceOptions> = {
    fileName: 'chart.svg',
    filePath: 'images',
}
