import { describe, expect, it } from '@jest/globals';
import { superset } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';

describe('superset', () => {
	testSuite('superset', supersetTests);
});

function supersetTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are superset', () => {
		expect(superset()).toBe(true);
	});

	it('single set is a superset', () => {
		expect(superset(setA)).toBe(true);
	});

	it('same set is a superset', () => {
		expect(superset(setA, setA)).toBe(true);
	});

	it('three of the same set are supersets', () => {
		expect(superset(setA, setA, setA)).toBe(true);
	});

	it('many of the same set are supersets', () => {
		expect(superset(setA, setA, setA, setA, setA, setA)).toBe(true);
	});

	it('two sets with different elements are not supersets', () => {
		expect(superset(setA, setB)).toBe(false);
	});

	it('three sets with different elements are not supersets', () => {
		expect(superset(setA, setB, setC)).toBe(false);
	});

	it('two sets with no shared elements are not supersets', () => {
		expect(superset(setD, setE)).toBe(false);
	});

	it('three sets with no shared elements are not supersets', () => {
		expect(superset(setD, setE, setF)).toBe(false);
	});

	it('disjoint sets with decreasing cardinality are not supersets', () => {
		expect(superset(setA, setD)).toBe(false);
	});

	it('disjoint sets with increasing cardinality are not supersets', () => {
		expect(superset(setD, setA)).toBe(false);
	});

	it('many sets with different elements are not supersets', () => {
		expect(superset(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('many sets (reversed) with different elements are not supersets', () => {
		expect(superset(setF, setE, setD, setC, setB, setA)).toBe(false);
	});

	it('the empty set is a superset of itself', () => {
		expect(superset(empty, empty)).toBe(true);
	});

	it('any non-empty set is a superset of the empty set', () => {
		expect(superset(setA, empty)).toBe(true);
	});

	it('the empty set is not a superset of any non-empty set', () => {
		expect(superset(empty, setA)).toBe(false);
	});

	it('any non-universal set is not a superset of the universal set', () => {
		expect(superset(setA, universal)).toBe(false);
	});

	it('the universal set is a superset of any non-universal set', () => {
		expect(superset(universal, setA)).toBe(true);
	});

	it('the empty set is not a superset of every non-empty set', () => {
		expect(superset(empty, setA, setB, setC, setD, setE, setF, universal)).toBe(false);
	});

	it('the universal set is a superset of every non-universal set', () => {
		expect(superset(universal, setF, setE, setD, setC, setB, setA, empty)).toBe(true);
	});
}
