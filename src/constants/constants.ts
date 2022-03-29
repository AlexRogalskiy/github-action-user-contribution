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

import {
    ChartOptions,
    ColorOptions,
    ColorScheme,
    RequestInfo,
    RequestOptions,
    ResourceOptions,
} from '../../typings/domain-types'
import { ChartType, ColorSchemeType } from '../../typings/enum-types'

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
    chartRequest: CHART_REQUEST_OPTIONS,
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
 * Chart configuration options
 */
export const CHART_OPTIONS: Readonly<ChartOptions> = {
    chartType: ChartType.heatmap,
}

/**
 * Resource configuration options
 */
export const RESOURCE_OPTIONS: Readonly<ResourceOptions> = {
    fileName: 'chart.svg',
    filePath: 'images',
}
