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
import { Optional } from '../../typings/standard-types'

import { isFileExists } from './files'

export const getType = (obj: any): Optional<string> => {
    const value: string = Object.prototype.toString.call(obj)
    const result = /\s(\w+)/.exec(value)

    return result && result[1].toLowerCase()
}

export const isNull = (value: any): boolean => {
    return value === null
}

export const isUndefined = (value: any): boolean => {
    return value === undefined || typeof value === 'undefined'
}

export const isNullOrUndefined = (value: any): boolean => {
    return isNull(value) || isUndefined(value)
}

export const isNotNull = (value: any): boolean => {
    return !isNull(value)
}

export const isNotUndefined = (value: any): boolean => {
    return !isUndefined(value)
}

export const isString = (value: any): boolean => {
    return isNotNull(value) && (typeof value === 'string' || getType(value) === 'string')
}

export const isArray = (value: any): boolean => {
    // return myArray.constructor.toString().indexOf("Array") > -1;
    return isNotNull(value) && Object.prototype.toString.apply(value) === '[object Array]'
}

export const isObject = (value: any): boolean => {
    return isNotNull(value) && Object.prototype.toString.apply(value) === '[object Object]'
}

export const isFunction = (value: any): boolean => {
    return (
        isNotNull(value) &&
        typeof value === 'function' &&
        typeof value['constructor'] === 'function' &&
        typeof value['apply'] === 'function'
    )
}

export const isNumber = (value: any): boolean => {
    return (
        isNotNull(value) &&
        (typeof value === 'number' || getType(value) === 'number') &&
        Number.isFinite(value)
    )
}

/**
 * Returns a boolean indicating whether the object has the specified property.
 * @param obj - n object.
 * @param prop - A property name.
 * @returns {Boolean}
 */
export const hasProperty = (obj: any, prop: Optional<PropertyKey>): boolean => {
    if (isNullOrUndefined(obj)) return false
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return isFunction(obj['hasOwnProperty']) ? Object.prototype.hasOwnProperty.call(obj, prop) : prop in obj
}

export const isBlankString = (value: Optional<string>): boolean => {
    return !value || /^\s*$/.test(value)
}

export const isValidFile = (fileName: string, extension = ''): boolean => {
    return fileName.endsWith(extension) && isFileExists(fileName)
}

export const isValidUrl = (value: string): boolean => {
    try {
        new URL(value)

        return true
    } catch {
        return false
    }
}
