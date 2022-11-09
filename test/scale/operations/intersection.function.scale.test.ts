import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { intersection } from '../../../src';
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

describe('intersection @ scale', () => {
	describe('intersection ⋅ large sets', () => {
		it('intersection(of1):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('intersection(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('intersection(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf2));
			expect(result.size).toBe(7_500_000);
		});

		it('intersection(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(multiplesOf2, multiplesOf1));
			expect(result.size).toBe(7_500_000);
		});

		it('intersection(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('intersection(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result.size).toBe(2_500_000);
		});

		it('intersection(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result.size).toBe(2_500_000);
		});
	});

	describe('intersection ⋅ many sets', () => {
		it('intersection(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(...someEquivalent));
			expect(result.size).toBe(100_000);
		});

		it('intersection(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(...manyEquivalent));
			expect(result.size).toBe(1_000);
		});

		it('intersection(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(...someDisjoint));
			expect(result.size).toBe(0);
		});

		it('intersection(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('intersection', () => intersection(...manyDisjoint));
			expect(result.size).toBe(0);
		});
	});

	describe('intersection ⋅ many times', () => {
		it('100k ⋅ intersection(2 Equivalent):'.padEnd(padding), () => {
			const intersectionMock = jest.fn(intersection);
			Timer.manyTimes('intersection', () => intersectionMock(...coupleEquivalent), times);
			expect(intersectionMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ intersection(5 Equivalent):'.padEnd(padding), () => {
			const intersectionMock = jest.fn(intersection);
			Timer.manyTimes('intersection', () => intersectionMock(...fewEquivalent), times);
			expect(intersectionMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ intersection(2 Disjoint):'.padEnd(padding), () => {
			const intersectionMock = jest.fn(intersection);
			Timer.manyTimes('intersection', () => intersectionMock(...coupleDisjoint), times);
			expect(intersectionMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ intersection(5 Disjoint):'.padEnd(padding), () => {
			const intersectionMock = jest.fn(intersection);
			Timer.manyTimes('intersection', () => intersectionMock(...fewDisjoint), times);
			expect(intersectionMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('intersection'));
});
