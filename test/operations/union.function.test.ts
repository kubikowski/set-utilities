import { describe, expect, it } from '@jest/globals';
import { equivalence, union } from '../../src';
import { TestSets } from '../util/test-sets/test-sets.model';
import { testSuite } from '../util/test-suite.function';

describe('union', () => {
	testSuite('union', unionTests);
});

function unionTests<T>(testSets: TestSets<T>): void {
	const { a, b, c, d, e, empty, f, g, setA, setB, setC, setD, setE, setF, universal } = testSets;
	const unionAB = new Set<T>([ a, b, c, d, e, f ]);
	const unionABC = new Set<T>([ a, b, c, d, e, f, g ]);

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

	it('many of the same set union returns self', () => {
		const result = union(setA, setA, setA);
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

	it('many sets\' union contains all elements from all sets', () => {
		const result = union(setA, setB, setC, setD, setE, setF);
		expect(equivalence(result, universal)).toBe(true);
	});

	it('any sets\' union with the empty set is itself', () => {
		const result = union(setA, empty);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('any sets\' union with the universal set is the universal set', () => {
		const result = union(setA, universal);
		expect(equivalence(result, universal)).toBe(true);
	});

	it('the empty sets\' union with itself is itself', () => {
		const result = union(empty, empty);
		expect(equivalence(result, empty)).toBe(true);
	});
}
