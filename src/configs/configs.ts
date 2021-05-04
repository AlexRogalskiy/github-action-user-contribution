import { ProfileType } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { COLOR_OPTIONS, OUTPUT_OPTIONS, REQUEST_OPTIONS } from '../constants/constants'

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
        requestOptions: REQUEST_OPTIONS,
        colorOptions: COLOR_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        requestOptions: REQUEST_OPTIONS,
        colorOptions: COLOR_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        requestOptions: REQUEST_OPTIONS,
        colorOptions: COLOR_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}
