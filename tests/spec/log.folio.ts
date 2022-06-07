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
import { folio as base } from 'folio'
import * as fs from 'fs'

const fixtures = base.extend<{ saveLogsOnFailure: void }>()

fixtures.saveLogsOnFailure.init(
    async ({ testInfo }, runTest) => {
        const logs: any[] = []
        console.debug = (...args) => logs.push(args.map(String).join(''))
        await runTest()
        if (testInfo.status !== testInfo.expectedStatus)
            fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\n'), 'utf8')
    },
    { auto: true }
)

export const folio = fixtures.build()
