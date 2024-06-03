import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { difference } from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';

describe('difference @ scale', () => {
	describe('difference ⋅ 2 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf2B } = ScaleTestSets;

		it('difference(of1):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('difference(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf1, multiplesOf1));
			expect(result.size).toBe(0);
		});

		it('difference(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf1, multiplesOf2));
			expect(result.size).toBe(7_500_000);
		});

		it('difference(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf2, multiplesOf1));
			expect(result.size).toBe(0);
		});

		it('difference(of2, of2B):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf2, multiplesOf2B));
			expect(result.size).toBe(7_500_000);
		});
	});

	describe('difference ⋅ 3 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3, multiplesOf3B, multiplesOf3C } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('difference'));

		it('difference(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result.size).toBe(0);
		});

		it('difference(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result.size).toBe(5_000_000);
		});

		it('difference(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result.size).toBe(0);
		});

		it('difference(of3, of3B, of3C):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(multiplesOf3, multiplesOf3B, multiplesOf3C));
			expect(result.size).toBe(5_000_000);
		});
	});

	describe('difference ⋅ many sets', () => {
		const { manyDisjoint, manyEquivalent, manyRandom, someDisjoint, someEquivalent, someRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('difference'));

		it('difference(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(...someEquivalent));
			expect(result.size).toBe(0);
		});

		it('difference(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(...manyEquivalent));
			expect(result.size).toBe(0);
		});

		it('difference(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(...someDisjoint));
			expect(result.size).toBe(100_000);
		});

		it('difference(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(...manyDisjoint));
			expect(result.size).toBe(1_000);
		});

		it('difference(100 Random):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(...someRandom));
			expect(result.size).toBe(0);
		});

		it('difference(10k Random):'.padEnd(padding), () => {
			const result = Timer.time('difference', () => difference(...manyRandom));
			expect(result.size).toBe(0);
		});
	});

	describe('difference ⋅ many times', () => {
		const { coupleDisjoint, coupleEquivalent, coupleRandom, fewDisjoint, fewEquivalent, fewRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('difference'));

		it('100k ⋅ difference(2 Equivalent):'.padEnd(padding), () => {
			const differenceMock = jest.fn(difference);
			Timer.manyTimes('difference', () => differenceMock(...coupleEquivalent), times);
			expect(differenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ difference(5 Equivalent):'.padEnd(padding), () => {
			const differenceMock = jest.fn(difference);
			Timer.manyTimes('difference', () => differenceMock(...fewEquivalent), times);
			expect(differenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ difference(2 Disjoint):'.padEnd(padding), () => {
			const differenceMock = jest.fn(difference);
			Timer.manyTimes('difference', () => differenceMock(...coupleDisjoint), times);
			expect(differenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ difference(5 Disjoint):'.padEnd(padding), () => {
			const differenceMock = jest.fn(difference);
			Timer.manyTimes('difference', () => differenceMock(...fewDisjoint), times);
			expect(differenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ difference(2 Random):'.padEnd(padding), () => {
			const differenceMock = jest.fn(difference);
			Timer.time('difference', () => coupleRandom.forEach(sets => differenceMock(...sets)));
			expect(differenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ difference(5 Random):'.padEnd(padding), () => {
			const differenceMock = jest.fn(difference);
			Timer.time('difference', () => fewRandom.forEach(sets => differenceMock(...sets)));
			expect(differenceMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('difference'));
});
