import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { superset } from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';

describe('superset @ scale', () => {
	describe('superset ⋅ large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3 } = ScaleTestSets;

		it('superset(of1):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(multiplesOf1));
			expect(result).toBe(true);
		});

		it('superset(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(multiplesOf1, multiplesOf1));
			expect(result).toBe(true);
		});

		it('superset(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(multiplesOf1, multiplesOf2));
			expect(result).toBe(true);
		});

		it('superset(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('superset(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result).toBe(true);
		});

		it('superset(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result).toBe(true);
		});

		it('superset(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});
	});

	describe('superset ⋅ many sets', () => {
		const { manyDisjoint, manyEquivalent, someDisjoint, someEquivalent } = ScaleTestSets;

		it('superset(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(...someEquivalent));
			expect(result).toBe(true);
		});

		it('superset(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(...manyEquivalent));
			expect(result).toBe(true);
		});

		it('superset(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(...someDisjoint));
			expect(result).toBe(false);
		});

		it('superset(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('superset', () => superset(...manyDisjoint));
			expect(result).toBe(false);
		});
	});

	describe('superset ⋅ many times', () => {
		const { coupleDisjoint, coupleEquivalent, fewDisjoint, fewEquivalent } = ScaleTestSets;

		it('100k ⋅ superset(2 Equivalent):'.padEnd(padding), () => {
			const supersetMock = jest.fn(superset);
			Timer.manyTimes('superset', () => supersetMock(...coupleEquivalent), times);
			expect(supersetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ superset(5 Equivalent):'.padEnd(padding), () => {
			const supersetMock = jest.fn(superset);
			Timer.manyTimes('superset', () => supersetMock(...fewEquivalent), times);
			expect(supersetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ superset(2 Disjoint):'.padEnd(padding), () => {
			const supersetMock = jest.fn(superset);
			Timer.manyTimes('superset', () => supersetMock(...coupleDisjoint), times);
			expect(supersetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ superset(5 Disjoint):'.padEnd(padding), () => {
			const supersetMock = jest.fn(superset);
			Timer.manyTimes('superset', () => supersetMock(...fewDisjoint), times);
			expect(supersetMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('superset'));
});
