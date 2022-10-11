import { describe, expect, it } from '@jest/globals';
import { equivalence, union } from '../../src';
import { empty, setA, setB, setC } from '../constants/testing-constants';

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

	it('two sets\' union contains all values from both sets', () => {
		const result = union(setA, setB);
		expect(equivalence(result, unionAB)).toBe(true);
	});

	it('three sets\' union contains all values from all sets', () => {
		const result = union(setA, setB, setC);
		expect(equivalence(result, unionABC)).toBe(true);
	});
});
