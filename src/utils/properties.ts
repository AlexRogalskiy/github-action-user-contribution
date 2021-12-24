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
/*
 * Copyright (C) 2021 The SensibleMetrics team (http://github.com/AlexRogalskiy)
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
import * as core from '@actions/core'
import decamelize from 'decamelize'

import schema from '../configs/schema'

export const getRequiredProperty = (property: string): string => {
    return getProperty(property, { required: true })
}

export const getProperty = (property: string, options?: core.InputOptions): string => {
    return core.getInput(property, options)
}

export const getProperties = (): any => {
    const input = Object.fromEntries(
        Object.keys(schema.describe().keys).map(item => [
            item,
            getProperty(decamelize(item, { separator: '-' })),
        ])
    )

    const { error, value } = schema.validate(input, { abortEarly: false })
    if (error) {
        throw error
    }

    return value
}
