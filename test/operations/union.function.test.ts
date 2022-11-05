import { describe, expect, it } from '@jest/globals';
import { equivalence, union } from '../../src';
import { empty, setA, setB, setC, setD, setE, setF, universal } from '../constants/testing.constants';

describe('union', () => {
	const unionAB = new Set<number>([ 0, 1, 2, 3, 4, 5 ]);
	const unionABC = new Set<number>([ 0, 1, 2, 3, 4, 5, 6 ]);

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

	it('two sets\' union contains all values from both sets', () => {
		const result = union(setA, setB);
		expect(equivalence(result, unionAB)).toBe(true);
	});

	it('three sets\' union contains all values from all sets', () => {
		const result = union(setA, setB, setC);
		expect(equivalence(result, unionABC)).toBe(true);
	});

	it('many sets\' union contains all values from all sets', () => {
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
});
