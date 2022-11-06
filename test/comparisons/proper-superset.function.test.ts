import { describe, expect, it } from '@jest/globals';
import { properSuperset } from '../../src';
import { NumberTestSets } from '../util/test-sets/number-test-sets.model';
import { StringTestSets } from '../util/test-sets/string-test-sets.model';
import { SymbolTestSets } from '../util/test-sets/symbol-test-sets.model';
import { TestSets } from '../util/test-sets/test-sets.model';

describe('proper superset', () => {
	describe('proper superset ⋅ number', () => properSupersetTests(new NumberTestSets()));
	describe('proper superset ⋅ string', () => properSupersetTests(new StringTestSets()));
	describe('proper superset ⋅ symbol', () => properSupersetTests(new SymbolTestSets()));
});

function properSupersetTests<T>(testSets: TestSets<T>): void {
	const { empty, minimal, setA, setB, setC, setD, setE, setF, universal } = testSets;

	it('no sets are proper supersets', () => {
		expect(properSuperset()).toBe(true);
	});

	it('single set is a proper superset', () => {
		expect(properSuperset(setA)).toBe(true);
	});

	it('same set is not a proper superset', () => {
		expect(properSuperset(setA, setA)).toBe(false);
	});

	it('many of the same set are not proper supersets', () => {
		expect(properSuperset(setA, setA, setA)).toBe(false);
	});

	it('two sets with different elements are not proper supersets', () => {
		expect(properSuperset(setA, setB)).toBe(false);
	});

	it('three sets with different elements are not proper supersets', () => {
		expect(properSuperset(setA, setB, setC)).toBe(false);
	});

	it('many sets with different elements are not proper supersets', () => {
		expect(properSuperset(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('any non-empty set is a proper superset of the empty set', () => {
		expect(properSuperset(setA, empty)).toBe(true);
	});

	it('any non-universal set is not a proper superset of the universal set', () => {
		expect(properSuperset(setA, universal)).toBe(false);
	});

	it('the empty set is not a proper superset of itself', () => {
		expect(properSuperset(empty, empty)).toBe(false);
	});

	/* custom proper superset tests */

	it('following sets with greater cardinalities are not proper supersets', () => {
		expect(properSuperset(minimal, setA)).toBe(false);
	});

	it('sets without element bijection are not proper supersets', () => {
		expect(properSuperset(setA, setD)).toBe(false);
	});

	it('the universal set is a proper superset of every non-universal set', () => {
		expect(properSuperset(universal, setA, setB, setC, minimal, empty)).toBe(true);
	});
}
