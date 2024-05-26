import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { sort } from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';
import { NumberTestSets } from '../../util/test-sets/number-test-sets.model';

describe('sort @ scale', () => {
	const defaultComparator = new NumberTestSets().defaultComparator.bind(null);
	const reverseComparator = new NumberTestSets().reverseComparator.bind(null);

	describe('sort ⋅ large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3 } = ScaleTestSets;

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
		const { manyUnordered } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('sort'));

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
});
