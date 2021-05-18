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
 * @desc Type representing image profiles configuration options
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
