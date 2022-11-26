import { describe, expect, it } from '@jest/globals';
import { equivalence, union } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';
import { UnionTestSets } from '../../util/unit/union-test-sets.model';

describe('union', () => {
	testSuite('union', unionTests);
});

function unionTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;
	const { unionAB, unionABC, unionDE, unionDEF, unionAD } = new UnionTestSets(testSets);

	it('no sets union returns empty set', () => {
		const result = union();
		expect(equivalence(result, empty)).toBe(true);
	});

	it('single set union returns self', () => {
		const result = union(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('same set union returns self', () => {
		const result = union(setA, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('three of the same set union returns self', () => {
		const result = union(setA, setA, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('many of the same set union returns self', () => {
		const result = union(setA, setA, setA, setA, setA, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('two sets\' union contains all elements from both sets', () => {
		const result = union(setA, setB);
		expect(equivalence(result, unionAB)).toBe(true);
	});

	it('three sets\' union contains all elements from all sets', () => {
		const result = union(setA, setB, setC);
		expect(equivalence(result, unionABC)).toBe(true);
	});

	it('two sets\' disjoint union contains all elements from both sets', () => {
		const result = union(setD, setE);
		expect(equivalence(result, unionDE)).toBe(true);
	});

	it('three sets\' disjoint union contains all elements from all sets', () => {
		const result = union(setD, setE, setF);
		expect(equivalence(result, unionDEF)).toBe(true);
	});

	it('the union of disjoint sets with decreasing cardinality contains all elements from both sets', () => {
		const result = union(setA, setD);
		expect(equivalence(result, unionAD)).toBe(true);
	});

	it('the union of disjoint sets with increasing cardinality contains all elements from both sets', () => {
		const result = union(setD, setA);
		expect(equivalence(result, unionAD)).toBe(true);
	});

	it('many sets\' union contains all elements from all sets', () => {
		const result = union(setA, setB, setC, setD, setE, setF);
		expect(equivalence(result, universal)).toBe(true);
	});

	it('many sets\' (reversed) union contains all elements from all sets', () => {
		const result = union(setF, setE, setD, setC, setB, setA);
		expect(equivalence(result, universal)).toBe(true);
	});

	it('the empty set\'s union with itself is itself', () => {
		const result = union(empty, empty);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('any non-empty set\'s union with the empty set is itself', () => {
		const result = union(setA, empty);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('the empty set\'s union with any non-empty set is that set', () => {
		const result = union(empty, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('any non-universal set\'s union with the universal set is the universal set', () => {
		const result = union(setA, universal);
		expect(equivalence(result, universal)).toBe(true);
	});

	it('the universal set\'s union with any non-universal set is the universal set', () => {
		const result = union(universal, setA);
		expect(equivalence(result, universal)).toBe(true);
	});

	it('the empty set\'s union with all non-empty sets is the universal set', () => {
		const result = union(empty, setA, setB, setC, setD, setE, setF, universal);
		expect(equivalence(result, universal)).toBe(true);
	});

	it('the universal set\'s union with all non-universal sets is the universal set', () => {
		const result = union(universal, setF, setE, setD, setC, setB, setA, empty);
		expect(equivalence(result, universal)).toBe(true);
	});
}
