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
