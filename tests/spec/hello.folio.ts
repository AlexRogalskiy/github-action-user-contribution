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
import { folio as base } from './log.folio'

export { expect } from 'folio'

// Define test fixtures |hello|, |world| and |test|.
type TestFixtures = {
    hello: string
    world: string
    test: string
}
const fixtures = base.extend<TestFixtures>()

fixtures.hello.init(async ({}, run) => {
    // Set up fixture.
    const value = 'Hello'
    // Run the test with the fixture value.
    await run(value)
    // Clean up fixture.
})

fixtures.world.init(async ({}, run) => {
    await run('World')
})

fixtures.test.init(async ({}, run) => {
    await run('Test')
})

const folio = fixtures.build()

export const it = folio.it
