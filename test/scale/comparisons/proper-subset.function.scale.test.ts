import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { properSubset } from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';

describe('proper subset @ scale', () => {
	describe('proper subset ⋅ 2 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf2B } = ScaleTestSets;

		it('properSubset(of1):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf1));
			expect(result).toBe(true);
		});

		it('properSubset(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf1, multiplesOf1));
			expect(result).toBe(false);
		});

		it('properSubset(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf1, multiplesOf2));
			expect(result).toBe(false);
		});

		it('properSubset(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf2, multiplesOf1));
			expect(result).toBe(true);
		});

		it('properSubset(of2, of2B):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf2, multiplesOf2B));
			expect(result).toBe(false);
		});
	});

	describe('proper subset ⋅ 3 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3, multiplesOf3B, multiplesOf3C } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('properSubset'));

		it('properSubset(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result).toBe(false);
		});

		it('properSubset(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result).toBe(false);
		});

		it('properSubset(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('properSubset(of3, of3B, of3C):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(multiplesOf3, multiplesOf3B, multiplesOf3C));
			expect(result).toBe(false);
		});
	});

	describe('proper subset ⋅ many sets', () => {
		const { manyDisjoint, manyEquivalent, manyRandom, someDisjoint, someEquivalent, someRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('properSubset'));

		it('properSubset(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(...someEquivalent));
			expect(result).toBe(false);
		});

		it('properSubset(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(...manyEquivalent));
			expect(result).toBe(false);
		});

		it('properSubset(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(...someDisjoint));
			expect(result).toBe(false);
		});

		it('properSubset(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(...manyDisjoint));
			expect(result).toBe(false);
		});

		it('properSubset(100 Random):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(...someRandom));
			expect(result).toBe(false);
		});

		it('properSubset(10k Random):'.padEnd(padding), () => {
			const result = Timer.time('properSubset', () => properSubset(...manyRandom));
			expect(result).toBe(false);
		});
	});

	describe('proper subset ⋅ many times', () => {
		const { coupleDisjoint, coupleEquivalent, coupleRandom, fewDisjoint, fewEquivalent, fewRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('properSubset'));

		it('100k ⋅ properSubset(2 Equivalent):'.padEnd(padding), () => {
			const properSubsetMock = jest.fn(properSubset);
			Timer.manyTimes('properSubset', () => properSubsetMock(...coupleEquivalent), times);
			expect(properSubsetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSubset(5 Equivalent):'.padEnd(padding), () => {
			const properSubsetMock = jest.fn(properSubset);
			Timer.manyTimes('properSubset', () => properSubsetMock(...fewEquivalent), times);
			expect(properSubsetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSubset(2 Disjoint):'.padEnd(padding), () => {
			const properSubsetMock = jest.fn(properSubset);
			Timer.manyTimes('properSubset', () => properSubsetMock(...coupleDisjoint), times);
			expect(properSubsetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSubset(5 Disjoint):'.padEnd(padding), () => {
			const properSubsetMock = jest.fn(properSubset);
			Timer.manyTimes('properSubset', () => properSubsetMock(...fewDisjoint), times);
			expect(properSubsetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSubset(2 Random):'.padEnd(padding), () => {
			const properSubsetMock = jest.fn(properSubset);
			Timer.time('properSubset', () => coupleRandom.forEach(sets => properSubsetMock(...sets)));
			expect(properSubsetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSubset(5 Random):'.padEnd(padding), () => {
			const properSubsetMock = jest.fn(properSubset);
			Timer.time('properSubset', () => fewRandom.forEach(sets => properSubsetMock(...sets)));
			expect(properSubsetMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('properSubset'));
});
