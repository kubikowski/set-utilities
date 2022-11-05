import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { sort } from '../../src';
import { multiplesOf1, multiplesOf2, multiplesOf3, padding, times } from '../constants/scale-testing.constants';
import { defaultComparator, manyUnordered, reverseComparator } from '../constants/sort-testing-constants';
import { Timer } from '../constants/timer.model';

export function sortScaleTest(): void {

	describe('sort ⋅ large sets', () => {
		it('sort(of1):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('sort(of1, default):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf1, defaultComparator));
			expect(result.size).toBe(15_000_000);
		});

		it('sort(of1, reverse):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf1, reverseComparator));
			expect(result.size).toBe(15_000_000);
		});

		it('sort(of2):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf2));
			expect(result.size).toBe(7_500_000);
		});

		it('sort(of2, default):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf2, defaultComparator));
			expect(result.size).toBe(7_500_000);
		});

		it('sort(of2, reverse):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf2, reverseComparator));
			expect(result.size).toBe(7_500_000);
		});

		it('sort(of3):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf3));
			expect(result.size).toBe(5_000_000);
		});

		it('sort(of3, default):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf3, defaultComparator));
			expect(result.size).toBe(5_000_000);
		});

		it('sort(of3, reverse):'.padEnd(padding), () => {
			const result = Timer.time('sort', () => sort(multiplesOf3, reverseComparator));
			expect(result.size).toBe(5_000_000);
		});
	});

	describe('sort ⋅ many times', () => {
		it('100k ⋅ sort(100):'.padEnd(padding), () => {
			const sortMock = jest.fn(sort);
			Timer.manyTimes('sort', () => sortMock(manyUnordered), times);
			expect(sortMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ sort(100, default):'.padEnd(padding), () => {
			const sortMock = jest.fn(sort);
			Timer.manyTimes('sort', () => sortMock(manyUnordered, defaultComparator), times);
			expect(sortMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ sort(100, reverse):'.padEnd(padding), () => {
			const sortMock = jest.fn(sort);
			Timer.manyTimes('sort', () => sortMock(manyUnordered, reverseComparator), times);
			expect(sortMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('sort'));
}
