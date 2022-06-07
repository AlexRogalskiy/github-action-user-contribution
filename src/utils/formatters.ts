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
import { DateRange } from '../../typings/domain-types'

import { valueError } from '../errors/value.error'

export const formatParams = (dateRange: DateRange = {}): string | null => {
    const sp = new URLSearchParams()

    const o: any = { ...dateRange }

    if ('year' in dateRange && dateRange.year) {
        const from = new Date()
        from.setFullYear(dateRange.year)
        from.setMonth(0)
        from.setDate(1)

        const to = new Date()
        to.setFullYear(dateRange.year)
        to.setMonth(11)
        to.setDate(31)

        o.from = from
        o.to = to
    }

    for (const s of ['from', 'to']) {
        if (o[s]) {
            const value = formatDate(o[s])

            if (value >= formatDate(new Date())) {
                throw valueError(`Cannot get contribution for date in the future, value=${value}`)
            }

            sp.set(s, value)
        }

        return sp.toString()
    }

    return null
}

export const formatDate = (input: Date | string): string => {
    const currentDate = new Date(input)

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const date = currentDate.getDate()

    return [year, month.toString().padStart(2, '0'), date.toString().padStart(2, '0')].join('-')
}
