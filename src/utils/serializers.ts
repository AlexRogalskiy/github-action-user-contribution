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
export const serialize = (
    obj: any,
    space = 4,
    callback?: (this: any, key: string, value: any) => any
): string => JSON.stringify(obj, callback, space)

export const deserialize = (obj: string, callback?: (this: any, key: string, value: any) => any): any =>
    JSON.parse(obj, callback)
