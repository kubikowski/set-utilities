import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { sort } from '../../src';
import { multiplesOf1, multiplesOf2, multiplesOf3, padding, times } from '../util/scale/scale-testing.constants';
import { Timer } from '../util/scale/timer.model';
import { NumberTestSets } from '../util/test-sets/number-test-sets.model';

export function sortScaleTests(): void {
	const { defaultComparator, reverseComparator } = new NumberTestSets();

	/* unordered set of 100 elements, contains: 0 - 99 */
	const manyUnordered = new Set<number>([
		98, 49, 85, 53, 83, 57, 86, 94, 82, 47,
		21, 45, 29, 15, 66, 64, 76, 84, 9, 73,
		26, 80, 32, 91, 65, 38, 14, 24, 13, 78,
		10, 37, 92, 95, 18, 69, 6, 25, 3, 87,
		51, 48, 71, 81, 77, 27, 41, 79, 97, 33,
		60, 89, 55, 36, 63, 50, 93, 30, 4, 62,
		8, 31, 17, 88, 40, 39, 46, 52, 56, 42,
		72, 28, 44, 59, 43, 99, 68, 35, 2, 90,
		96, 19, 54, 70, 7, 61, 75, 23, 22, 5,
		11, 34, 16, 67, 0, 20, 12, 74, 1, 58,
	]);

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
			const sortMock = jest.fn(sort<number>);
			Timer.manyTimes('sort', () => sortMock(manyUnordered), times);
			expect(sortMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ sort(100, default):'.padEnd(padding), () => {
			const sortMock = jest.fn(sort<number>);
			Timer.manyTimes('sort', () => sortMock(manyUnordered, defaultComparator), times);
			expect(sortMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ sort(100, reverse):'.padEnd(padding), () => {
			const sortMock = jest.fn(sort<number>);
			Timer.manyTimes('sort', () => sortMock(manyUnordered, reverseComparator), times);
			expect(sortMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('sort'));
}
