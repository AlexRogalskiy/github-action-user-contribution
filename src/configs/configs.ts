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
import { ProfileType } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { mergeProps } from '../utils/commons'

import {
    CHART_OPTIONS,
    COLOR_OPTIONS,
    OUTPUT_OPTIONS,
    REQUEST_OPTIONS,
    RESOURCE_OPTIONS,
} from '../constants/constants'

/**
 * ProfileRecord
 * @description Type representing image profiles configuration options
 */
export type ProfileRecord = Record<ProfileType, Partial<ProfileOptions>>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ProfileRecord> = {
    dev: {
        requestOptions: mergeProps(REQUEST_OPTIONS, { chartRequest: { url: 'http://localhost:3000/api' } }),
        chartOptions: CHART_OPTIONS,
        colorOptions: COLOR_OPTIONS,
        resourceOptions: RESOURCE_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        requestOptions: REQUEST_OPTIONS,
        chartOptions: CHART_OPTIONS,
        colorOptions: COLOR_OPTIONS,
        resourceOptions: RESOURCE_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        requestOptions: mergeProps(REQUEST_OPTIONS, { chartRequest: { url: 'http://localhost:3000/api' } }),
        chartOptions: CHART_OPTIONS,
        colorOptions: COLOR_OPTIONS,
        resourceOptions: RESOURCE_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}
