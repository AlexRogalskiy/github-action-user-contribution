'use strict';

import sleep from 'await-sleep'

import 'jest-extended'

const expect = require('expect');

describe('my suite', () => {
    beforeAll(async () => {
        console.log('Waiting for 1 sec');

        await sleep(1000);

        console.log("Test Suite: >>> before all");
    });

    afterAll(async () => {
        console.log("Test Suite: >>> after all");
    });

    test.only('one of my .only test', () => {
        expect(1 + 1).toEqual(2);
    });
    test.only('other of my .only test', () => {
        expect(1 + 2).toEqual(3);
    });
    // Should fail, but isn't even run
    test('my only true test', () => {
        expect(1 + 1).toEqual(1);
    });
});
