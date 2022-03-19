/**
 * @jest-environment jsdom
 */

import load from '../src/data/load';
import { runAll } from '../src/testbench';
import FakeScope from './examples/fakescope.json';
import data from './examples/testdata.json';

describe('Gate Testing', () => {
    const scope = FakeScope;
    load(scope);
    test('And Gate', () => {
        const result = runAll(data);
        expect(result.summary.passed).toBe(4);
    });
});
