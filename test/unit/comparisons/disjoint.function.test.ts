import { describe, expect, it } from '@jest/globals';
import { disjoint } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';

describe('disjoint', () => {
	testSuite('disjoint', disjointTests);
});

function disjointTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are disjoint', () => {
		expect(disjoint()).toBe(true);
	});

	it('single set is disjoint', () => {
		expect(disjoint(setA)).toBe(true);
	});

	it('same set is not disjoint', () => {
		expect(disjoint(setA, setA)).toBe(false);
	});

	it('three of the same set are not disjoint', () => {
		expect(disjoint(setA, setA, setA)).toBe(false);
	});

	it('many of the same set are not disjoint', () => {
		expect(disjoint(setA, setA, setA, setA, setA, setA)).toBe(false);
	});

	it('two sets with some shared elements are not disjoint', () => {
		expect(disjoint(setA, setB)).toBe(false);
	});

	it('three sets with some shared elements are not disjoint', () => {
		expect(disjoint(setA, setB, setC)).toBe(false);
	});

	it('two sets with no shared elements are disjoint', () => {
		expect(disjoint(setD, setE)).toBe(true);
	});

	it('three sets with no shared elements are disjoint', () => {
		expect(disjoint(setD, setE, setF)).toBe(true);
	});

	it('many sets with some shared elements of the first are not disjoint', () => {
		expect(disjoint(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('many sets (reversed) with no shared elements of the first are disjoint', () => {
		expect(disjoint(setF, setE, setD, setC, setB, setA)).toBe(true);
	});

	it('any non-empty set and the empty set are disjoint', () => {
		expect(disjoint(setA, empty)).toBe(true);
	});

	it('any non-empty set and the universal set are not disjoint', () => {
		expect(disjoint(setA, universal)).toBe(false);
	});

	it('the empty set is disjoint with itself', () => {
		expect(disjoint(empty, empty)).toBe(true);
	});

	/* custom disjoint tests */

	it('two sets with no shared elements are disjoint', () => {
		expect(disjoint(setA, setD)).toBe(true);
	});

	it('many sets with no shared elements are disjoint', () => {
		expect(disjoint(setA, setD, setE, setF)).toBe(true);
	});

	it('a set & many of another set with no shared elements are disjoint', () => {
		expect(disjoint(setA, setD, setD, setD)).toBe(true);
	});
}
