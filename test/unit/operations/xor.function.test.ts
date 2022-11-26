import { describe, expect, it } from '@jest/globals';
import { equivalence, xor } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';
import { XorTestSets } from '../../util/unit/xor-test-sets.model';

describe('xor', () => {
	testSuite('xor', xorTests);
});

function xorTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;
	const { xorAB, xorABC, xorDE, xorDEF, xorAD, xorABCDEF, xorAU } = new XorTestSets(testSets);

	it('no sets xor returns empty set', () => {
		const result = xor();
		expect(equivalence(result, empty)).toBe(true);
	});

	it('single set xor returns self', () => {
		const result = xor(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('same set xor returns the empty set', () => {
		const result = xor(setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('three of the same set xor returns the empty set', () => {
		const result = xor(setA, setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('many of the same set xor returns the empty set', () => {
		const result = xor(setA, setA, setA, setA, setA, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('two different sets xor returns unique elements', () => {
		const result = xor(setA, setB);
		expect(equivalence(result, xorAB)).toBe(true);
	});

	it('three different sets xor returns unique elements', () => {
		const result = xor(setA, setB, setC);
		expect(equivalence(result, xorABC)).toBe(true);
	});

	it('two disjoint sets xor returns all elements', () => {
		const result = xor(setD, setE);
		expect(equivalence(result, xorDE)).toBe(true);
	});

	it('three disjoint sets xor returns all elements', () => {
		const result = xor(setD, setE, setF);
		expect(equivalence(result, xorDEF)).toBe(true);
	});

	it('the xor of disjoint sets with decreasing cardinality contains all elements from both sets', () => {
		const result = xor(setA, setD);
		expect(equivalence(result, xorAD)).toBe(true);
	});

	it('the xor of disjoint sets with increasing cardinality contains all elements from both sets', () => {
		const result = xor(setD, setA);
		expect(equivalence(result, xorAD)).toBe(true);
	});

	it('many different sets xor returns unique elements', () => {
		const result = xor(setA, setB, setC, setD, setE, setF);
		expect(equivalence(result, xorABCDEF)).toBe(true);
	});

	it('many different sets (reversed) xor returns unique elements', () => {
		const result = xor(setF, setE, setD, setC, setB, setA);
		expect(equivalence(result, xorABCDEF)).toBe(true);
	});

	it('the empty set\'s xor with itself is itself', () => {
		const result = xor(empty, empty);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('any non-empty set\'s xor with the empty set is itself', () => {
		const result = xor(setA, empty);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('the empty set\'s xor with any non-empty set is that set', () => {
		const result = xor(empty, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('any non-universal set\'s xor with the universal set is the difference of the universal set and itself', () => {
		const result = xor(setA, universal);
		expect(equivalence(result, xorAU)).toBe(true);
	});

	it('the universal set\'s xor with any non-universal set is the difference of the universal set and that set', () => {
		const result = xor(universal, setA);
		expect(equivalence(result, xorAU)).toBe(true);
	});

	it('the empty set\'s xor with all non-empty sets and the universal set is the empty set', () => {
		const result = xor(empty, setA, setB, setC, setD, setE, setF, universal);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('the universal set\'s union with all non-universal sets is the empty set', () => {
		const result = xor(universal, setF, setE, setD, setC, setB, setA, empty);
		expect(equivalence(result, empty)).toBe(true);
	});
}
