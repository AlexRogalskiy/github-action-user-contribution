/*
 * Copyright (C) 2021 The SensibleMetrics team (http://sensiblemetrics.io/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import boxen from 'boxen'

import { ChartType, ColorSchemeType } from './enum-types'

/**
 * ConfigOptions
 * @description Type representing configuration options
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
 * @description Type representing color palette
 */
export type ColorPalette = string[]

//--------------------------------------------------------------------------------------------------
/**
 * ColorScheme
 * @description Type representing color scheme
 */
export type ColorScheme = Record<ColorSchemeType, ColorPalette>

//--------------------------------------------------------------------------------------------------
/**
 * RequestOptions
 * @description Type representing request options
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
 * @description Type representing request info
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
 * @description Type representing color options
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
 * @description Type representing chart options
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
 * @description Type representing style options
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
 * @description Type representing repository options
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
 * @description Type representing resource options
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
 * @description Type representing profiles options
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
 * @description Type representing position
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
 * @description Type representing user contribution graph data
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
 * @description Type representing contribution graph data item
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
 * @description Type representing date range
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
 * @description Type representing pair
 */
export type Pair<K, V> = {
    key: K
    value: V
}

//--------------------------------------------------------------------------------------------------
