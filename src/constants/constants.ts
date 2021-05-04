import boxen from 'boxen'

import { ColorOptions, ColorScheme, RequestOptions } from '../../typings/domain-types'
import { ColorSchemeType } from '../../typings/enum-types'

/**
 * Supported color schemes
 */
export const COLOR_SCHEMES: Readonly<ColorScheme> = {
    red: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    green: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    blue: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
}

/**
 * Request configuration options
 */
export const REQUEST_OPTIONS: Readonly<RequestOptions> = {
    url: 'https://github.com',
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
