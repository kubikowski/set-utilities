import { describe, expect, it } from '@jest/globals';
import { properSuperset } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';

describe('proper superset', () => {
	testSuite('proper superset', properSupersetTests);
});

function properSupersetTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are proper supersets', () => {
		expect(properSuperset()).toBe(true);
	});

	it('single set is a proper superset', () => {
		expect(properSuperset(setA)).toBe(true);
	});

	it('same set is not a proper superset', () => {
		expect(properSuperset(setA, setA)).toBe(false);
	});

	it('three of the same set are not proper supersets', () => {
		expect(properSuperset(setA, setA, setA)).toBe(false);
	});

	it('many of the same set are not proper supersets', () => {
		expect(properSuperset(setA, setA, setA, setA, setA, setA)).toBe(false);
	});

	it('two sets with different elements are not proper supersets', () => {
		expect(properSuperset(setA, setB)).toBe(false);
	});

	it('three sets with different elements are not proper supersets', () => {
		expect(properSuperset(setA, setB, setC)).toBe(false);
	});

	it('two sets no shared elements are not proper supersets', () => {
		expect(properSuperset(setD, setE)).toBe(false);
	});

	it('three sets with no shared elements are not proper supersets', () => {
		expect(properSuperset(setD, setE, setF)).toBe(false);
	});

	it('disjoint sets with decreasing cardinality are not proper supersets', () => {
		expect(properSuperset(setA, setD)).toBe(false);
	});

	it('disjoint sets with increasing cardinality are not proper supersets', () => {
		expect(properSuperset(setD, setA)).toBe(false);
	});

	it('many sets with different elements are not proper supersets', () => {
		expect(properSuperset(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('many sets (reversed) with different elements are not proper supersets', () => {
		expect(properSuperset(setF, setE, setD, setC, setB, setA)).toBe(false);
	});

	it('the empty set is not a proper superset of itself', () => {
		expect(properSuperset(empty, empty)).toBe(false);
	});

	it('any non-empty set is a proper superset of the empty set', () => {
		expect(properSuperset(setA, empty)).toBe(true);
	});

	it('the empty set is not a proper superset of any non-empty set', () => {
		expect(properSuperset(empty, setA)).toBe(false);
	});

	it('any non-universal set is not a proper superset of the universal set', () => {
		expect(properSuperset(setA, universal)).toBe(false);
	});

	it('the universal set is a proper superset of any non-universal set', () => {
		expect(properSuperset(universal, setA)).toBe(true);
	});

	it('the empty set is not a proper superset of every non-empty set', () => {
		expect(properSuperset(empty, setA, setB, setC, setD, setE, setF, universal)).toBe(false);
	});

	it('the universal set is a proper superset of every non-universal set', () => {
		expect(properSuperset(universal, setF, setE, setD, setC, setB, setA, empty)).toBe(true);
	});
}
