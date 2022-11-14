import { describe, expect, it } from '@jest/globals';
import { difference, equivalence } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';

describe('difference', () => {
	testSuite('difference', differenceTests);
});

function differenceTests<T>(testSets: TestSets<T>): void {
	const { c, d, e, empty, f, g, h, i, j, setA, setB, setC, setD, setE, setF, universal } = testSets;
	const differenceAB = new Set<T>([ c, e ]);
	const differenceABC = new Set<T>([ e ]);
	const differenceUA = new Set<T>([ d, f, g, h, i, j ]);

	it('no sets difference returns empty set', () => {
		const result = difference();
		expect(equivalence(result, empty)).toBe(true);
	});

	it('single set difference returns self', () => {
		const result = difference(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('same set has no difference overlap', () => {
		const result = difference(setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('three of the same set has no difference overlap', () => {
		const result = difference(setA, setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('many of the same set has no difference overlap', () => {
		const result = difference(setA, setA, setA, setA, setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('two sets\' difference is a subset of the first', () => {
		const result = difference(setA, setB);
		expect(equivalence(result, differenceAB)).toBe(true);
	});

	it('three sets\' difference is a subset of the first', () => {
		const result = difference(setA, setB, setC);
		expect(equivalence(result, differenceABC)).toBe(true);
	});

	it('two disjoint sets\' difference is the first set', () => {
		const result = difference(setD, setE);
		expect(equivalence(result, setD)).toBe(true);
	});

	it('three disjoint sets\' difference is the first set', () => {
		const result = difference(setD, setE, setF);
		expect(equivalence(result, setD)).toBe(true);
	});

	it('the difference of disjoint sets with decreasing cardinality is the first set', () => {
		const result = difference(setA, setD);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('the difference of disjoint sets with increasing cardinality is the first set', () => {
		const result = difference(setD, setA);
		expect(equivalence(result, setD)).toBe(true);
	});

	it('many sets\' difference is a subset of the first', () => {
		const result = difference(setA, setB, setC, setD, setE, setF);
		expect(equivalence(result, differenceABC)).toBe(true);
	});

	it('many sets\' (reversed) difference is a subset of the first', () => {
		const result = difference(setF, setE, setD, setC, setB, setA);
		expect(equivalence(result, setF)).toBe(true);
	});

	it('the empty set\'s difference with itself is itself', () => {
		const result = difference(empty, empty);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('any non-empty set\'s difference with the empty set is itself', () => {
		const result = difference(setA, empty);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('the empty set\'s difference with any non-empty set is the empty set', () => {
		const result = difference(empty, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('any set\'s difference with the universal set is the empty set', () => {
		const result = difference(setA, universal);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('the universal set\'s difference with any non-universal set contains all elements not in that set', () => {
		const result = difference(universal, setA);
		expect(equivalence(result, differenceUA)).toBe(true);
	});

	it('the empty set\'s difference with all non-empty sets is the empty set', () => {
		const result = difference(empty, setA, setB, setC, setD, setE, setF, universal);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('the universal set\'s difference with all non-universal sets is the empty set', () => {
		const result = difference(universal, setF, setE, setD, setC, setB, setA, empty);
		expect(equivalence(result, empty)).toBe(true);
	});
}
