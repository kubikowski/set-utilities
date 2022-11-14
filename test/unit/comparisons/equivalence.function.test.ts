import { describe, expect, it } from '@jest/globals';
import { equivalence } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';

describe('equivalence', () => {
	testSuite('equivalence', equivalenceTests);
});

function equivalenceTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are equivalent', () => {
		expect(equivalence()).toBe(true);
	});

	it('single set is equivalent', () => {
		expect(equivalence(setA)).toBe(true);
	});

	it('same set is equivalent', () => {
		expect(equivalence(setA, setA)).toBe(true);
	});

	it('three of the same set are equivalent', () => {
		expect(equivalence(setA, setA, setA)).toBe(true);
	});

	it('many of the same set are equivalent', () => {
		expect(equivalence(setA, setA, setA, setA, setA, setA)).toBe(true);
	});

	it('two sets with some shared elements are not equivalent', () => {
		expect(equivalence(setA, setB)).toBe(false);
	});

	it('three sets with some shared elements are not equivalent', () => {
		expect(equivalence(setA, setB, setC)).toBe(false);
	});

	it('two sets with no shared elements are not equivalent', () => {
		expect(equivalence(setD, setE)).toBe(false);
	});

	it('three sets with no shared elements are not equivalent', () => {
		expect(equivalence(setD, setE, setF)).toBe(false);
	});

	it('disjoint sets with decreasing cardinality are not equivalent', () => {
		expect(equivalence(setA, setD)).toBe(false);
	});

	it('disjoint sets with increasing cardinality are not equivalent', () => {
		expect(equivalence(setD, setA)).toBe(false);
	});

	it('many different sets are not equivalent', () => {
		expect(equivalence(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('many different sets (reversed) are not equivalent', () => {
		expect(equivalence(setF, setE, setD, setC, setB, setA)).toBe(false);
	});

	it('the empty set is equivalent to itself', () => {
		expect(equivalence(empty, empty)).toBe(true);
	});

	it('any non-empty set and the empty set are not equivalent', () => {
		expect(equivalence(setA, empty)).toBe(false);
	});

	it('the empty set and any non-empty set are not equivalent', () => {
		expect(equivalence(empty, setA)).toBe(false);
	});

	it('any non-universal set and the universal set are not equivalent', () => {
		expect(equivalence(setA, universal)).toBe(false);
	});

	it('the universal set and any non-universal set are not equivalent', () => {
		expect(equivalence(universal, setA)).toBe(false);
	});

	it('the empty set is not equivalent to every non-empty set', () => {
		expect(equivalence(empty, setA, setB, setC, setD, setE, setF, universal)).toBe(false);
	});

	it('the universal set is not equivalent to every non-universal set', () => {
		expect(equivalence(universal, setF, setE, setD, setC, setB, setA, empty)).toBe(false);
	});
}
