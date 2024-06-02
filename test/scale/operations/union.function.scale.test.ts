import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { union } from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';

describe('union @ scale', () => {
	describe('union ⋅ 2 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf2B } = ScaleTestSets;

		it('union(of1):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('union(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf1, multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('union(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf1, multiplesOf2));
			expect(result.size).toBe(15_000_000);
		});

		it('union(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf2, multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('union(of2, of2B):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf2, multiplesOf2B));
			expect(result.size).toBe(15_000_000);
		});
	});

	describe('union ⋅ 3 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3, multiplesOf3B, multiplesOf3C } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('union'));

		it('union(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('union(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result.size).toBe(15_000_000);
		});

		it('union(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('union(of3, of3B, of3C):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(multiplesOf3, multiplesOf3B, multiplesOf3C));
			expect(result.size).toBe(15_000_000);
		});
	});

	describe('union ⋅ many sets', () => {
		const { manyDisjoint, manyEquivalent, manyRandom, someDisjoint, someEquivalent, someRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('union'));

		it('union(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(...someEquivalent));
			expect(result.size).toBe(100_000);
		});

		it('union(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(...manyEquivalent));
			expect(result.size).toBe(1_000);
		});

		it('union(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(...someDisjoint));
			expect(result.size).toBe(10_000_000);
		});

		it('union(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(...manyDisjoint));
			expect(result.size).toBe(10_000_000);
		});

		it('union(100 Random):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(...someRandom));
			expect(result.size).toBe(500_000);
		});

		it('union(10k Random):'.padEnd(padding), () => {
			const result = Timer.time('union', () => union(...manyRandom));
			expect(result.size).toBe(5_000);
		});
	});

	describe('union ⋅ many times', () => {
		const { coupleDisjoint, coupleEquivalent, coupleRandom, fewDisjoint, fewEquivalent, fewRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('union'));

		it('100k ⋅ union(2 Equivalent):'.padEnd(padding), () => {
			const unionMock = jest.fn(union);
			Timer.manyTimes('union', () => unionMock(...coupleEquivalent), times);
			expect(unionMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ union(5 Equivalent):'.padEnd(padding), () => {
			const unionMock = jest.fn(union);
			Timer.manyTimes('union', () => unionMock(...fewEquivalent), times);
			expect(unionMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ union(2 Disjoint):'.padEnd(padding), () => {
			const unionMock = jest.fn(union);
			Timer.manyTimes('union', () => unionMock(...coupleDisjoint), times);
			expect(unionMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ union(5 Disjoint):'.padEnd(padding), () => {
			const unionMock = jest.fn(union);
			Timer.manyTimes('union', () => unionMock(...fewDisjoint), times);
			expect(unionMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ union(2 Random):'.padEnd(padding), () => {
			const unionMock = jest.fn(union);
			Timer.time('union', () => coupleRandom.forEach(sets => unionMock(...sets)));
			expect(unionMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ union(5 Random):'.padEnd(padding), () => {
			const unionMock = jest.fn(union);
			Timer.time('union', () => fewRandom.forEach(sets => unionMock(...sets)));
			expect(unionMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('union'));
});
