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
'use strict';

import {formatParams} from '../src/utils/formatters'

const expect = require('expect');

describe('Format Date test suite', () => {
    [
        [{}, ""],
        [{year: 2017}, "from=2017-01-01&to=2017-12-31"],
        [{from: new Date("2017-12-03")}, "from=2017-12-03"],
        [{from: "2017-12-03"}, "from=2017-12-03"],
        [{to: "2017-12-03"}, "to=2017-12-03"],
    ].forEach(([params, result]) =>
        it(`should format ${JSON.stringify(params)}`, () => {
            expect(formatParams(params)).toBe(result);
        })
    );

    it("should fail if the date is in the future", () => {
        expect(() => formatParams({to: Date()})).toThrow(Error);
    });
});
