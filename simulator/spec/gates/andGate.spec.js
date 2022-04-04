/**
 * @jest-environment jsdom
 */

import { setup } from '../../src/setup';
import load from '../../src/data/load';
import circuitData from '../circuits/andGate.json';
import testData from '../testData/andGate.json';
import { runAll } from '../../src/testbench';

describe('And Gate Testing', () => {
    // setup without errir
    test('Setup Call', () => {
        expect(() => setup()).not.toThrow();
    });
    // load the circuit data
    test('load circuitData', () => {
        /**
         * loading circuitData using load function without error :==> circuitData --> globalScope
         */
        expect(() => load(circuitData)).not.toThrow();
    });
    // run test using rullAll - test_bench function
    test('Run All tests', () => {
        /**
         * passing testData
         */
        const result = runAll(testData);
        // all four test should be passed
        expect(result.summary.passed).toBe(4);
    });
});
