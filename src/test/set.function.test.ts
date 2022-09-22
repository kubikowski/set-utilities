import { describe, expect, it } from '@jest/globals';
import { difference } from '../functions/difference.function';
import { equivalence } from '../functions/equivalence.function';
import { intersection } from '../functions/intersection.function';
import { union } from '../functions/union.function';
import { xor } from '../functions/xor.function';

describe('Set Utilities', () => {

	/**
	 * Value Overlaps:
	 * - 0: shared by setA, setB, and setC
	 * - 1: shared by setA, setB
	 * - 2: shared by setA, setC
	 * - 3: shared by setB, setC
	 * - 4: unique to setA
	 * - 5: unique to setB
	 * - 6: unique to setC
	 */
	const setA = new Set<number>([ 0, 1, 2, 4 ]);
	const setB = new Set<number>([ 0, 1, 3, 5 ]);
	const setC = new Set<number>([ 0, 2, 3, 6 ]);
	const empty = new Set<never>([]);

	describe('difference', () => {
		const differenceAB = new Set<number>([ 2, 4 ]);
		const differenceABC = new Set<number>([ 4 ]);

		it('no sets difference returns empty set', () => {
			const result = difference();
			expect(equivalence(result, empty)).toBe(true);
		});

		it('single set difference returns self', () => {
			const result = difference(setA);
			expect(equivalence(result, setA)).toBe(true);
		});

		it('same set has no difference overlap', () => {
			const result = difference(setA, setA);
			expect(result.size).toBe(0);
		});

		it('two sets\' difference is a subset of the first', () => {
			const result = difference(setA, setB);
			expect(equivalence(result, differenceAB)).toBe(true);
		});

		it('three sets\' difference is a subset of the first', () => {
			const result = difference(setA, setB, setC);
			expect(equivalence(result, differenceABC)).toBe(true);
		});
	});

	describe('equivalence', () => {
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
	});

	describe('intersection', () => {
		const intersectionAB = new Set<number>([ 0, 1 ]);
		const intersectionABC = new Set<number>([ 0 ]);

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

		it('two sets\' intersection is a subset of the first', () => {
			const result = intersection(setA, setB);
			expect(equivalence(result, intersectionAB)).toBe(true);
		});

		it('three sets\' intersection is a subset of the first', () => {
			const result = intersection(setA, setB, setC);
			expect(equivalence(result, intersectionABC)).toBe(true);
		});
	});

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

	describe('xor', () => {
		const xorAB = new Set<number>([ 2, 3, 4, 5 ]);
		const xorABC = new Set<number>([ 4, 5, 6 ]);

		it('no sets xor returns empty set', () => {
			const result = xor();
			expect(equivalence(result, empty)).toBe(true);
		});

		it('single set xor returns self', () => {
			const result = xor(setA);
			expect(equivalence(result, setA)).toBe(true);
		});

		it('equivalence: same set xor returns the empty set', () => {
			const result = xor(setA, setA);
			expect(result.size).toBe(0);
		});

		it('two different sets xor returns unique values', () => {
			const result = xor(setA, setB);
			expect(equivalence(result, xorAB)).toBe(true);
		});

		it('three different sets xor returns unique values', () => {
			const result = xor(setA, setB, setC);
			expect(equivalence(result, xorABC)).toBe(true);
		});
	});
});
