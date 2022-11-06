import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { difference } from '../../src';
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
} from '../util/scale/scale-testing.constants';
import { Timer } from '../util/scale/timer.model';

export function differenceScaleTests(): void {

	describe('difference ⋅ large sets', () => {
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
	});

	describe('difference ⋅ many sets', () => {
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
	});

	describe('difference ⋅ many times', () => {
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
	});

	afterAll(() => Timer.log('difference'));
}
