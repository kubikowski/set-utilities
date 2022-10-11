import { describe, expect, it } from '@jest/globals';
import { equivalence, xor } from '../../src';
import { empty, setA, setB, setC } from '../constants/testing-constants';

describe('xor', () => {
	const xorAB = new Set<number>([ 2, 3, 4, 5 ]);
	const xorABC = new Set<number>([ 4, 5, 6 ]);

	it('no sets xor returns empty set', () => {
		const result = xor();
		expect(equivalence(result, empty)).toBe(true);
	});

	it('single set xor returns self', () => {
		const result = xor(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('equivalence: same set xor returns the empty set', () => {
		const result = xor(setA, setA);
		expect(result.size).toBe(0);
	});

	it('two different sets xor returns unique values', () => {
		const result = xor(setA, setB);
		expect(equivalence(result, xorAB)).toBe(true);
	});

	it('three different sets xor returns unique values', () => {
		const result = xor(setA, setB, setC);
		expect(equivalence(result, xorABC)).toBe(true);
	});
});
