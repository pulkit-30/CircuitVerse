/**
 * @jest-environment jsdom
 */

import { setup } from '../../src/setup';

import load from '../../src/data/load';
import circuitData from '../circuits/andGate.json';
import testData from '../testData/andGate.json';
import { runAll } from '../../src/testbench';
import CodeMirror from 'codemirror';

jest.mock('codemirror');

describe('And Gate Testing', () => {
    CodeMirror.fromTextArea.mockResolvedValue({});
    setup();

    test('load circuitData', () => {
        expect(() => load(circuitData)).not.toThrow();
    });
    test('Run All tests', () => {
        load(circuitData);
        const result = runAll(testData, globalScope);
        expect(result.summary.passed).toBe(4);
    });
});
