import { describe, expect, it } from '@jest/globals';
import { superset } from '../../src';
import { TestSets } from '../util/test-sets/test-sets.model';
import { testSuite } from '../util/test-suite.function';

describe('superset', () => {
	testSuite('superset', supersetTests);
});

function supersetTests<T>(testSets: TestSets<T>): void {
	const { empty, minimal, setA, setB, setC, setD, setE, setF, universal } = testSets;

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

	it('many sets with different elements are not supersets', () => {
		expect(superset(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('many sets (reversed) with different elements are not supersets', () => {
		expect(superset(setF, setE, setD, setC, setB, setA)).toBe(false);
	});

	it('any non-empty set is a superset of the empty set', () => {
		expect(superset(setA, empty)).toBe(true);
	});

	it('any non-universal set is not a superset of the universal set', () => {
		expect(superset(setA, universal)).toBe(false);
	});

	it('the empty set is a superset of itself', () => {
		expect(superset(empty, empty)).toBe(true);
	});

	/* custom superset tests */

	it('following sets with greater cardinalities are not supersets', () => {
		expect(superset(minimal, setA)).toBe(false);
	});

	it('sets without element bijection are not supersets', () => {
		expect(superset(setA, setD)).toBe(false);
	});

	it('the universal set is a superset of every set', () => {
		expect(superset(universal, setA, setB, setC, minimal, empty)).toBe(true);
	});
}
