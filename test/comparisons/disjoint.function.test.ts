import { describe, expect, it } from '@jest/globals';
import { disjoint } from '../../src';
import { NumberTestSets } from '../util/test-sets/number-test-sets.model';
import { StringTestSets } from '../util/test-sets/string-test-sets.model';
import { SymbolTestSets } from '../util/test-sets/symbol-test-sets.model';
import { TestSets } from '../util/test-sets/test-sets.model';

describe('disjoint', () => {
	describe('disjoint ⋅ number', () => disjointTests(new NumberTestSets()));
	describe('disjoint ⋅ string', () => disjointTests(new StringTestSets()));
	describe('disjoint ⋅ symbol', () => disjointTests(new SymbolTestSets()));
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

	it('many of the same set are not disjoint', () => {
		expect(disjoint(setA, setA, setA)).toBe(false);
	});

	it('two sets with some shared values are not disjoint', () => {
		expect(disjoint(setA, setB)).toBe(false);
	});

	it('three sets with some shared values are not disjoint', () => {
		expect(disjoint(setA, setB, setC)).toBe(false);
	});

	it('many sets with some shared values are not disjoint', () => {
		expect(disjoint(setA, setB, setC, setD, setE, setF)).toBe(false);
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

	it('two sets with no shared values are disjoint', () => {
		expect(disjoint(setA, setD)).toBe(true);
	});

	it('many sets with no shared values are disjoint', () => {
		expect(disjoint(setA, setD, setE, setF)).toBe(true);
	});

	it('a set & many of another set with no shared values are disjoint', () => {
		expect(disjoint(setA, setD, setD, setD)).toBe(true);
	});
}
