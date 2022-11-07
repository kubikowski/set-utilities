import { describe, expect, it } from '@jest/globals';
import { equivalence, xor } from '../../src';
import { TestSets } from '../util/test-sets/test-sets.model';
import { testSuite } from '../util/test-suite.function';

describe('xor', () => {
	testSuite('xor', xorTests);
});

function xorTests<T>(testSets: TestSets<T>): void {
	const { c, d, e, empty, f, g, h, i, j, setA, setB, setC, setD, setE, setF, universal } = testSets;
	const xorAB = new Set<T>([ c, d, e, f ]);
	const xorABC = new Set<T>([ e, f, g ]);
	const xorABCDEF = new Set<T>([ e, f, g, h, i, j ]);
	const xorAU = new Set<T>([ d, f, g, h, i, j ]);

	it('no sets xor returns empty set', () => {
		const result = xor();
		expect(equivalence(result, empty)).toBe(true);
	});

	it('single set xor returns self', () => {
		const result = xor(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('same set xor returns the empty set', () => {
		const result = xor(setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('three of the same set xor returns the empty set', () => {
		const result = xor(setA, setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('many of the same set xor returns the empty set', () => {
		const result = xor(setA, setA, setA, setA, setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('two different sets xor returns unique elements', () => {
		const result = xor(setA, setB);
		expect(equivalence(result, xorAB)).toBe(true);
	});

	it('three different sets xor returns unique elements', () => {
		const result = xor(setA, setB, setC);
		expect(equivalence(result, xorABC)).toBe(true);
	});

	it('many different sets xor returns unique elements', () => {
		const result = xor(setA, setB, setC, setD, setE, setF);
		expect(equivalence(result, xorABCDEF)).toBe(true);
	});

	it('many different sets (reversed) xor returns unique elements', () => {
		const result = xor(setF, setE, setD, setC, setB, setA);
		expect(equivalence(result, xorABCDEF)).toBe(true);
	});

	it('any non-empty sets\' xor with the empty set is itself', () => {
		const result = xor(setA, empty);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('any non-universal sets\' xor with the universal set is the difference of the universal set and itself', () => {
		const result = xor(setA, universal);
		expect(equivalence(result, xorAU)).toBe(true);
	});

	it('the empty sets\' xor with itself is itself', () => {
		const result = xor(empty, empty);
		expect(equivalence(result, empty)).toBe(true);
	});
}
