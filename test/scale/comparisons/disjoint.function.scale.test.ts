import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { disjoint }  from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';

describe('disjoint @ scale', () => {
	describe('disjoint ⋅ large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3 } = ScaleTestSets;

		it('disjoint(of1):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(multiplesOf1));
			expect(result).toBe(true);
		});

		it('disjoint(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(multiplesOf1, multiplesOf1));
			expect(result).toBe(false);
		});

		it('disjoint(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(multiplesOf1, multiplesOf2));
			expect(result).toBe(false);
		});

		it('disjoint(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('disjoint(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result).toBe(false);
		});

		it('disjoint(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result).toBe(false);
		});

		it('disjoint(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});
	});

	describe('disjoint ⋅ many sets', () => {
		const { manyDisjoint, manyEquivalent, someDisjoint, someEquivalent } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('disjoint'));

		it('disjoint(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(...someEquivalent));
			expect(result).toBe(false);
		});

		it('disjoint(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(...manyEquivalent));
			expect(result).toBe(false);
		});

		it('disjoint(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(...someDisjoint));
			expect(result).toBe(true);
		});

		it('disjoint(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('disjoint', () => disjoint(...manyDisjoint));
			expect(result).toBe(true);
		});
	});

	describe('disjoint ⋅ many times', () => {
		const { coupleDisjoint, coupleEquivalent, fewDisjoint, fewEquivalent } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('disjoint'));

		it('100k ⋅ disjoint(2 Equivalent):'.padEnd(padding), () => {
			const disjointMock = jest.fn(disjoint);
			Timer.manyTimes('disjoint', () => disjointMock(...coupleEquivalent), times);
			expect(disjointMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ disjoint(5 Equivalent):'.padEnd(padding), () => {
			const disjointMock = jest.fn(disjoint);
			Timer.manyTimes('disjoint', () => disjointMock(...fewEquivalent), times);
			expect(disjointMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ disjoint(2 Disjoint):'.padEnd(padding), () => {
			const disjointMock = jest.fn(disjoint);
			Timer.manyTimes('disjoint', () => disjointMock(...coupleDisjoint), times);
			expect(disjointMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ disjoint(5 Disjoint):'.padEnd(padding), () => {
			const disjointMock = jest.fn(disjoint);
			Timer.manyTimes('disjoint', () => disjointMock(...fewDisjoint), times);
			expect(disjointMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('disjoint'));
});
