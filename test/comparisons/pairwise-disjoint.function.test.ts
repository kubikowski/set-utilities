import { describe, expect, it } from '@jest/globals';
import { pairwiseDisjoint } from '../../src';
import { NumberTestSets } from '../util/test-sets/number-test-sets.model';
import { StringTestSets } from '../util/test-sets/string-test-sets.model';
import { SymbolTestSets } from '../util/test-sets/symbol-test-sets.model';
import { TestSets } from '../util/test-sets/test-sets.model';

describe('pairwise disjoint', () => {
	describe('pairwise disjoint ⋅ number', () => pairwiseDisjointTests(new NumberTestSets()));
	describe('pairwise disjoint ⋅ string', () => pairwiseDisjointTests(new StringTestSets()));
	describe('pairwise disjoint ⋅ symbol', () => pairwiseDisjointTests(new SymbolTestSets()));
});

function pairwiseDisjointTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are pairwise disjoint', () => {
		expect(pairwiseDisjoint()).toBe(true);
	});

	it('single set is pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA)).toBe(true);
	});

	it('same set is not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setA)).toBe(false);
	});

	it('many of the same set are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setA, setA)).toBe(false);
	});

	it('two sets with some shared values are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setB)).toBe(false);
	});

	it('three sets with some shared values are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setB, setC)).toBe(false);
	});

	it('many sets with some shared values are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('any non-empty set and the empty set are pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, empty)).toBe(true);
	});

	it('any non-empty set and the universal set are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, universal)).toBe(false);
	});

	it('the empty set is pairwise disjoint with itself', () => {
		expect(pairwiseDisjoint(empty, empty)).toBe(true);
	});

	/* custom pairwise disjoint tests */

	it('two sets with no shared values are pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setD)).toBe(true);
	});

	it('many sets with no shared values are pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setD, setE, setF)).toBe(true);
	});

	it('a set & many of another set with no shared values are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setD, setD, setD)).toBe(false);
	});
}
