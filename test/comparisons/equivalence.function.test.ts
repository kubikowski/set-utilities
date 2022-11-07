import { describe, expect, it } from '@jest/globals';
import { equivalence } from '../../src';
import { TestSets } from '../util/test-sets/test-sets.model';
import { testSuite } from '../util/test-suite.function';

describe('equivalence', () => {
	testSuite('equivalence', equivalenceTests);
});

function equivalenceTests<T>(testSets: TestSets<T>): void {
	const { empty, minimal, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are equivalent', () => {
		expect(equivalence()).toBe(true);
	});

	it('single set is equivalent', () => {
		expect(equivalence(setA)).toBe(true);
	});

	it('same set is equivalent', () => {
		expect(equivalence(setA, setA)).toBe(true);
	});

	it('many of the same set are equivalent', () => {
		expect(equivalence(setA, setA, setA)).toBe(true);
	});

	it('two different sets are not equivalent', () => {
		expect(equivalence(setA, setB)).toBe(false);
	});

	it('three different sets are not equivalent', () => {
		expect(equivalence(setA, setB, setC)).toBe(false);
	});

	it('many different sets are not equivalent', () => {
		expect(equivalence(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('any non-empty set and the empty set are not equivalent', () => {
		expect(equivalence(setA, empty)).toBe(false);
	});

	it('any non-universal set and the universal set are not equivalent', () => {
		expect(equivalence(setA, universal)).toBe(false);
	});

	it('the empty set is equivalent to itself', () => {
		expect(equivalence(empty, empty)).toBe(true);
	});

	/* custom equivalence tests */

	it('two sets with different cardinalities are not equivalent', () => {
		expect(equivalence(setA, minimal)).toBe(false);
	});
}
