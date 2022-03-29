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
/**
 * ProfileType
 * @description Type representing supported profiles
 */
export enum ProfileType {
    dev = 'dev',
    prod = 'prod',
    test = 'test',
}

//--------------------------------------------------------------------------------------------------
/**
 * ErrorType
 * @description Type representing supported errors
 */
export enum ErrorType {
    general_error = 'GeneralError',
    parser_error = 'ParserError',
    validation_error = 'ValidationError',
    request_error = 'RequestError',
    response_error = 'ResponseError',
    parameter_error = 'ParameterError',
    type_error = 'TypeError',
    value_error = 'ValueError',
}

//--------------------------------------------------------------------------------------------------
/**
 * ColorSchemeType
 * @description Type representing supported color schemes
 */
export enum ColorSchemeType {
    red = 'red',
    green = 'green',
    blue = 'blue',
}

//--------------------------------------------------------------------------------------------------
/**
 * ChartType
 * @description Type representing supported charts
 */
export enum ChartType {
    heatmap = 'heatmap',
}

//--------------------------------------------------------------------------------------------------
/**
 * ChartType
 * @description Type representing supported charts
 */
export enum DayOfWeekType {
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
}

//--------------------------------------------------------------------------------------------------
