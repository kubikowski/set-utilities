import { describe, expect, it } from '@jest/globals';
import { subset } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';

describe('subset', () => {
	testSuite('subset', subsetTests);
});

function subsetTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are subsets', () => {
		expect(subset()).toBe(true);
	});

	it('single set is a subset', () => {
		expect(subset(setA)).toBe(true);
	});

	it('same set is a subset', () => {
		expect(subset(setA, setA)).toBe(true);
	});

	it('three of the same set are subsets', () => {
		expect(subset(setA, setA, setA)).toBe(true);
	});

	it('many of the same set are subsets', () => {
		expect(subset(setA, setA, setA, setA, setA, setA)).toBe(true);
	});

	it('two sets with different elements are not subsets', () => {
		expect(subset(setA, setB)).toBe(false);
	});

	it('three sets with different elements are not subsets', () => {
		expect(subset(setA, setB, setC)).toBe(false);
	});

	it('two sets with no shared elements are not subsets', () => {
		expect(subset(setD, setE)).toBe(false);
	});

	it('three sets with no shared elements are not subsets', () => {
		expect(subset(setD, setE, setF)).toBe(false);
	});

	it('disjoint sets with decreasing cardinality are not subsets', () => {
		expect(subset(setA, setD)).toBe(false);
	});

	it('disjoint sets with increasing cardinality are not subsets', () => {
		expect(subset(setD, setA)).toBe(false);
	});

	it('many sets with different elements are not subsets', () => {
		expect(subset(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('many sets (reversed) with different elements are not subsets', () => {
		expect(subset(setF, setE, setD, setC, setB, setA)).toBe(false);
	});

	it('the empty set is a subset of itself', () => {
		expect(subset(empty, empty)).toBe(true);
	});

	it('any non-empty set is not a subset of the empty set', () => {
		expect(subset(setA, empty)).toBe(false);
	});

	it('the empty set is a subset of any non-empty set', () => {
		expect(subset(empty, setA)).toBe(true);
	});

	it('any non-universal set is a subset of the universal set', () => {
		expect(subset(setA, universal)).toBe(true);
	});

	it('the universal set is not a subset of any non-universal set', () => {
		expect(subset(universal, setA)).toBe(false);
	});

	it('the empty set is a subset of every non-empty set', () => {
		expect(subset(empty, setA, setB, setC, setD, setE, setF, universal)).toBe(true);
	});

	it('the universal set is not a subset of every non-universal set', () => {
		expect(subset(universal, setF, setE, setD, setC, setB, setA, empty)).toBe(false);
	});
}
