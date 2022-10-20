import { describe, expect, it } from '@jest/globals';
import { equivalence, xor } from '../../src';
import { empty, setA, setB, setC, universal } from '../constants/testing-constants';

describe('xor', () => {
	const xorAB = new Set<number>([ 2, 3, 4, 5 ]);
	const xorABC = new Set<number>([ 4, 5, 6 ]);
	const xorAU = new Set<number>([ 3, 5, 6, 7 ]);

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
		expect(equivalence(result, empty)).toBe(true);
	});

	it('two different sets xor returns unique values', () => {
		const result = xor(setA, setB);
		expect(equivalence(result, xorAB)).toBe(true);
	});

	it('three different sets xor returns unique values', () => {
		const result = xor(setA, setB, setC);
		expect(equivalence(result, xorABC)).toBe(true);
	});

	it('any sets\' xor with the empty set is itself', () => {
		const result = xor(setA, empty);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('any sets\' xor with the universal set is the difference of the universal set and itself', () => {
		const result = xor(setA, universal);
		expect(equivalence(result, xorAU)).toBe(true);
	});
});
