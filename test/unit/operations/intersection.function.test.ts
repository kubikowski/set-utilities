import { describe, expect, it } from '@jest/globals';
import { equivalence, intersection } from '../../../src';
import { TestSets } from '../../util/test-sets/test-sets.model';
import { testSuite } from '../../util/test-suite.function';
import { IntersectionTestSets } from '../../util/unit/intersection-test-sets.model';

describe('intersection', () => {
	testSuite('intersection', intersectionTests);
});

function intersectionTests<T>(testSets: TestSets<T>): void {
	const { empty, setA, setB, setC, setD, setE, setF, universal } = testSets;
	const { intersectionAB, intersectionABC } = new IntersectionTestSets(testSets);

	it('no sets intersection returns empty set', () => {
		const result = intersection();
		expect(equivalence(result, empty)).toBe(true);
	});

	it('single set intersection returns self', () => {
		const result = intersection(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('same set intersection returns self', () => {
		const result = intersection(setA, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('three of the same set intersection returns self', () => {
		const result = intersection(setA, setA, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('many of the same set intersection returns self', () => {
		const result = intersection(setA, setA, setA, setA, setA, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('two sets\' intersection is a subset of the first', () => {
		const result = intersection(setA, setB);
		expect(equivalence(result, intersectionAB)).toBe(true);
	});

	it('three sets\' intersection is a subset of the first', () => {
		const result = intersection(setA, setB, setC);
		expect(equivalence(result, intersectionABC)).toBe(true);
	});

	it('two disjoint sets\' intersection is the empty set', () => {
		const result = intersection(setD, setE);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('three disjoint sets\' intersection is the empty set', () => {
		const result = intersection(setD, setE, setF);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('the intersection of disjoint sets with decreasing cardinality is the empty set', () => {
		const result = intersection(setA, setD);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('the intersection of disjoint sets with increasing cardinality is the empty set', () => {
		const result = intersection(setD, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('many sets\' intersection is a subset of the first', () => {
		const result = intersection(setA, setB, setC, setD, setE, setF);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('many sets\' (reversed) intersection is a subset of the first', () => {
		const result = intersection(setF, setE, setD, setC, setB, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('the empty set\'s intersection with itself is itself', () => {
		const result = intersection(empty, empty);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('any non-empty set\'s intersection with the empty set is the empty set', () => {
		const result = intersection(setA, empty);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('the empty set\'s intersection with any non-empty sets is the empty set', () => {
		const result = intersection(empty, setA);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('any non-universal set\'s intersection with the universal set is itself', () => {
		const result = intersection(setA, universal);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('the universal set\'s intersection with any non-universal set is that set', () => {
		const result = intersection(universal, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('the empty set\'s intersection with all non-empty sets is the empty set', () => {
		const result = intersection(empty, setA, setB, setC, setD, setE, setF, universal);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('the universal set\'s intersection with all non-universal sets is the empty set', () => {
		const result = intersection(universal, setF, setE, setD, setC, setB, setA, empty);
		expect(equivalence(result, empty)).toBe(true);
	});
}
