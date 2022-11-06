import { describe, expect, it } from '@jest/globals';
import { subset } from '../../src';
import { NumberTestSets } from '../util/test-sets/number-test-sets.model';
import { StringTestSets } from '../util/test-sets/string-test-sets.model';
import { SymbolTestSets } from '../util/test-sets/symbol-test-sets.model';
import { TestSets } from '../util/test-sets/test-sets.model';

describe('subset', () => {
	describe('subset ⋅ number', () => subsetTests(new NumberTestSets()));
	describe('subset ⋅ string', () => subsetTests(new StringTestSets()));
	describe('subset ⋅ symbol', () => subsetTests(new SymbolTestSets()));
});

function subsetTests<T>(testSets: TestSets<T>): void {
	const { empty, minimal, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are subsets', () => {
		expect(subset()).toBe(true);
	});

	it('single set is a subset', () => {
		expect(subset(setA)).toBe(true);
	});

	it('same set is a subset', () => {
		expect(subset(setA, setA)).toBe(true);
	});

	it('many of the same set are subsets', () => {
		expect(subset(setA, setA, setA)).toBe(true);
	});

	it('two sets with different elements are not subsets', () => {
		expect(subset(setA, setB)).toBe(false);
	});

	it('three sets with different elements are not subsets', () => {
		expect(subset(setA, setB, setC)).toBe(false);
	});

	it('many sets with different elements are not subsets', () => {
		expect(subset(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('any non-empty set is not a subset of the empty set', () => {
		expect(subset(setA, empty)).toBe(false);
	});

	it('any non-universal set is a subset of the universal set', () => {
		expect(subset(setA, universal)).toBe(true);
	});

	it('the empty set is a subset of itself', () => {
		expect(subset(empty, empty)).toBe(true);
	});

	/* custom subset tests */

	it('following sets with lower cardinalities are not subsets', () => {
		expect(subset(setA, minimal)).toBe(false);
	});

	it('sets without element bijection are not subsets', () => {
		expect(subset(setD, setA)).toBe(false);
	});

	it('the empty set is a subset of every set', () => {
		expect(subset(empty, minimal, setA, setB, setC, universal)).toBe(true);
	});
}
