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
import { ErrorType } from '../../typings/enum-types'

import { GeneralError } from './general.error'

/**
 * ValueError
 * @description Class representing value error
 */
export class ValueError extends GeneralError {
    /**
     * Value error constructor by input parameters
     * @param message - initial input {@link string} message
     * @param args - initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.value_error, message, args)
    }
}

export const valueError = (message: string, ...args: any[]): ValueError => new ValueError(message, args)
