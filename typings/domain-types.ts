import boxen from 'boxen'

import { ChartType, ColorSchemeType } from './enum-types'

/**
 * ConfigOptions
 * @desc Type representing configuration options
 */
export type ConfigOptions = {
    /**
     * Color configuration options
     */
    readonly colorOptions: ColorOptions
    /**
     * Chart configuration options
     */
    readonly chartOptions: ChartOptions
    /**
     * Resource configuration options
     */
    readonly resourceOptions: ResourceOptions
    /**
     * Account configuration options
     */
    readonly accountOptions: AccountOptions
}

//--------------------------------------------------------------------------------------------------
/**
 * ColorPalette
 * @desc Type representing color palette
 */
export type ColorPalette = string[]

//--------------------------------------------------------------------------------------------------
/**
 * ColorScheme
 * @desc Type representing color scheme
 */
export type ColorScheme = Record<ColorSchemeType, ColorPalette>

//--------------------------------------------------------------------------------------------------
/**
 * RequestOptions
 * @desc Type representing request options
 */
export type RequestOptions = {
    /**
     * GitHub request info
     */
    readonly githubRequest: Readonly<RequestInfo>
    /**
     * Chart request info
     */
    readonly chartRequest: Readonly<RequestInfo>
}

//--------------------------------------------------------------------------------------------------
/**
 * RequestInfo
 * @desc Type representing request info
 */
export type RequestInfo = {
    /**
     * Request url
     */
    readonly url: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ColorOptions
 * @desc Type representing color options
 */
export type ColorOptions = {
    /**
     * Color scheme options
     */
    readonly colorScheme: ColorSchemeType
}

//--------------------------------------------------------------------------------------------------
/**
 * ChartOptions
 * @desc Type representing chart options
 */
export type ChartOptions = {
    /**
     * Chart type options
     */
    readonly chartType: ChartType
}

//--------------------------------------------------------------------------------------------------
/**
 * StyleOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
    /**
     * Style theme
     */
    readonly theme: string
    /**
     * Style layout
     */
    readonly layout: string
}

//--------------------------------------------------------------------------------------------------
/**
 * RepoOptions
 * @desc Type representing repository options
 */
export type AccountOptions = {
    /**
     * GitHub username
     */
    readonly userName: string
    /**
     * Date range
     */
    readonly dateRange: DateRange
}

//--------------------------------------------------------------------------------------------------
/**
 * ResourceOptions
 * @desc Type representing resource options
 */
export type ResourceOptions = {
    /**
     * File name
     */
    readonly fileName: string
    /**
     * File path
     */
    readonly filePath: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profiles options
 */
export type ProfileOptions = {
    /**
     * Request configuration options
     */
    readonly requestOptions: RequestOptions
    /**
     * Color configuration options
     */
    readonly colorOptions: ColorOptions
    /**
     * Chart configuration options
     */
    readonly chartOptions: ChartOptions
    /**
     * Resource configuration options
     */
    readonly resourceOptions: ResourceOptions
    /**
     * Output configuration options
     */
    readonly outputOptions?: boxen.Options
}

//--------------------------------------------------------------------------------------------------
/**
 * Position
 * @desc Type representing position
 */
export type Position = {
    /**
     * X-position coordinate
     */
    x: number
    /**
     * X-position coordinate
     */
    y: number
}

//--------------------------------------------------------------------------------------------------
/**
 * ContributionGraphData
 * @desc Type representing user contribution graph data
 */
export type ContributionGraphData = {
    /**
     * Contribution cell data
     */
    cells: GraphDataItem[]
    /**
     * Color palette
     */
    colorPalette: ColorPalette
}

//--------------------------------------------------------------------------------------------------
/**
 * GraphDataItem
 * @desc Type representing contribution graph data item
 */
export type GraphDataItem = {
    /**
     * Contribution X-graph coordinate
     */
    x: number
    /**
     * Contribution Y-graph coordinate
     */
    y: number
    /**
     * Contribution color
     */
    color: string
    /**
     * Contribution count
     */
    count: number
    /**
     * Contribution date
     */
    date: string
}

//--------------------------------------------------------------------------------------------------
/**
 * DateRange
 * @desc Type representing date range
 */
export type DateRange =
    | {
          from?: string | Date
          to?: string | Date
      }
    | { year?: number }

//--------------------------------------------------------------------------------------------------
/**
 * Pair
 * @desc Type representing pair
 */
export type Pair<K, V> = {
    key: K
    value: V
}

//--------------------------------------------------------------------------------------------------
