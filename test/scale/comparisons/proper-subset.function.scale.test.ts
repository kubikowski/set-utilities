import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { properSubset } from '../../../src';
import {
	coupleDisjoint,
	coupleEquivalent,
	fewDisjoint,
	fewEquivalent,
	manyDisjoint,
	manyEquivalent,
	multiplesOf1,
	multiplesOf2,
	multiplesOf3,
	padding,
	someDisjoint,
	someEquivalent,
	times,
} from '../../util/scale/scale-testing.constants';
import { Timer } from '../../util/scale/timer.model';

describe('proper subset @ scale', () => {
	describe('proper subset ⋅ large sets', () => {
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
	});

	describe('proper subset ⋅ many sets', () => {
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
	});

	describe('proper subset ⋅ many times', () => {
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
	});

	afterAll(() => Timer.log('properSubset'));
});
