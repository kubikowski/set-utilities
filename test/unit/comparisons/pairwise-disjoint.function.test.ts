import { describe, expect, it } from '@jest/globals';
import { pairwiseDisjoint } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';

describe('pairwise disjoint', () => {
	testSuite('pairwise disjoint', pairwiseDisjointTests);
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

	it('three of the same set are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setA, setA)).toBe(false);
	});

	it('many of the same set are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setA, setA, setA, setA, setA)).toBe(false);
	});

	it('two sets with some shared elements are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setB)).toBe(false);
	});

	it('three sets with some shared elements are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setB, setC)).toBe(false);
	});

	it('two sets with no shared elements are pairwise disjoint', () => {
		expect(pairwiseDisjoint(setD, setE)).toBe(true);
	});

	it('three sets with no shared elements are pairwise disjoint', () => {
		expect(pairwiseDisjoint(setD, setE, setF)).toBe(true);
	});

	it('many sets with some shared elements are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('many sets (reversed) with some shared elements are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setF, setE, setD, setC, setB, setA)).toBe(false);
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

	it('two sets with no shared elements are pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setD)).toBe(true);
	});

	it('many sets with no shared elements are pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setD, setE, setF)).toBe(true);
	});

	it('a set & many of another set with no shared elements are not pairwise disjoint', () => {
		expect(pairwiseDisjoint(setA, setD, setD, setD)).toBe(false);
	});
}
