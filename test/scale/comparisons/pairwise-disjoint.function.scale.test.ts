import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { pairwiseDisjoint } from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';

describe('pairwise disjoint @ scale', () => {
	describe('pairwise disjoint ⋅ 2 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf2B } = ScaleTestSets;

		it('pairwiseDisjoint(of1):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1));
			expect(result).toBe(true);
		});

		it('pairwiseDisjoint(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1, multiplesOf1));
			expect(result).toBe(false);
		});

		it('pairwiseDisjoint(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1, multiplesOf2));
			expect(result).toBe(false);
		});

		it('pairwiseDisjoint(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('pairwiseDisjoint(of2, of2B):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf2, multiplesOf2B));
			expect(result).toBe(true);
		});
	});

	describe('pairwise disjoint ⋅ 3 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3, multiplesOf3B, multiplesOf3C } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('pairwiseDisjoint'));

		it('pairwiseDisjoint(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result).toBe(false);
		});

		it('pairwiseDisjoint(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result).toBe(false);
		});

		it('pairwiseDisjoint(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('pairwiseDisjoint(of3, of3B, of3C):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf3, multiplesOf3B, multiplesOf3C));
			expect(result).toBe(true);
		});
	});

	describe('pairwise disjoint ⋅ many sets', () => {
		const { manyDisjoint, manyEquivalent, someDisjoint, someEquivalent } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('pairwiseDisjoint'));

		it('pairwiseDisjoint(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...someEquivalent));
			expect(result).toBe(false);
		});

		it('pairwiseDisjoint(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...manyEquivalent));
			expect(result).toBe(false);
		});

		it('pairwiseDisjoint(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...someDisjoint));
			expect(result).toBe(true);
		});

		it('pairwiseDisjoint(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...manyDisjoint));
			expect(result).toBe(true);
		});
	});

	describe('pairwise disjoint ⋅ many times', () => {
		const { coupleDisjoint, coupleEquivalent, fewDisjoint, fewEquivalent } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('pairwiseDisjoint'));

		it('100k ⋅ pairwiseDisjoint(2 Equivalent):'.padEnd(padding), () => {
			const pairwiseDisjointMock = jest.fn(pairwiseDisjoint);
			Timer.manyTimes('pairwiseDisjoint', () => pairwiseDisjointMock(...coupleEquivalent), times);
			expect(pairwiseDisjointMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ pairwiseDisjoint(5 Equivalent):'.padEnd(padding), () => {
			const pairwiseDisjointMock = jest.fn(pairwiseDisjoint);
			Timer.manyTimes('pairwiseDisjoint', () => pairwiseDisjointMock(...fewEquivalent), times);
			expect(pairwiseDisjointMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ pairwiseDisjoint(2 Disjoint):'.padEnd(padding), () => {
			const pairwiseDisjointMock = jest.fn(pairwiseDisjoint);
			Timer.manyTimes('pairwiseDisjoint', () => pairwiseDisjointMock(...coupleDisjoint), times);
			expect(pairwiseDisjointMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ pairwiseDisjoint(5 Disjoint):'.padEnd(padding), () => {
			const pairwiseDisjointMock = jest.fn(pairwiseDisjoint);
			Timer.manyTimes('pairwiseDisjoint', () => pairwiseDisjointMock(...fewDisjoint), times);
			expect(pairwiseDisjointMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('pairwiseDisjoint'));
});
