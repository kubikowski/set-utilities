import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { properSuperset } from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';

describe('proper superset @ scale', () => {
	describe('proper superset ⋅ 2 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf2B } = ScaleTestSets;

		it('properSuperset(of1):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf1));
			expect(result).toBe(true);
		});

		it('properSuperset(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf1, multiplesOf1));
			expect(result).toBe(false);
		});

		it('properSuperset(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf1, multiplesOf2));
			expect(result).toBe(true);
		});

		it('properSuperset(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('properSuperset(of2, of2B):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf2, multiplesOf2B));
			expect(result).toBe(false);
		});
	});

	describe('proper superset ⋅ 3 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3, multiplesOf3B, multiplesOf3C } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('properSuperset'));

		it('properSuperset(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result).toBe(false);
		});

		it('properSuperset(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result).toBe(true);
		});

		it('properSuperset(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('properSuperset(of3, of3B, of3C):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(multiplesOf3, multiplesOf3B, multiplesOf3C));
			expect(result).toBe(false);
		});
	});

	describe('proper superset ⋅ many sets', () => {
		const { manyDisjoint, manyEquivalent, manyRandom, someDisjoint, someEquivalent, someRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('properSuperset'));

		it('properSuperset(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(...someEquivalent));
			expect(result).toBe(false);
		});

		it('properSuperset(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(...manyEquivalent));
			expect(result).toBe(false);
		});

		it('properSuperset(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(...someDisjoint));
			expect(result).toBe(false);
		});

		it('properSuperset(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(...manyDisjoint));
			expect(result).toBe(false);
		});

		it('properSuperset(100 Random):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(...someRandom));
			expect(result).toBe(false);
		});

		it('properSuperset(10k Random):'.padEnd(padding), () => {
			const result = Timer.time('properSuperset', () => properSuperset(...manyRandom));
			expect(result).toBe(false);
		});
	});

	describe('proper superset ⋅ many times', () => {
		const { coupleDisjoint, coupleEquivalent, coupleRandom, fewDisjoint, fewEquivalent, fewRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('properSuperset'));

		it('100k ⋅ properSuperset(2 Equivalent):'.padEnd(padding), () => {
			const properSupersetMock = jest.fn(properSuperset);
			Timer.manyTimes('properSuperset', () => properSupersetMock(...coupleEquivalent), times);
			expect(properSupersetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSuperset(5 Equivalent):'.padEnd(padding), () => {
			const properSupersetMock = jest.fn(properSuperset);
			Timer.manyTimes('properSuperset', () => properSupersetMock(...fewEquivalent), times);
			expect(properSupersetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSuperset(2 Disjoint):'.padEnd(padding), () => {
			const properSupersetMock = jest.fn(properSuperset);
			Timer.manyTimes('properSuperset', () => properSupersetMock(...coupleDisjoint), times);
			expect(properSupersetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSuperset(5 Disjoint):'.padEnd(padding), () => {
			const properSupersetMock = jest.fn(properSuperset);
			Timer.manyTimes('properSuperset', () => properSupersetMock(...fewDisjoint), times);
			expect(properSupersetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSuperset(2 Random):'.padEnd(padding), () => {
			const properSupersetMock = jest.fn(properSuperset);
			Timer.time('properSuperset', () => coupleRandom.forEach(sets => properSupersetMock(...sets)));
			expect(properSupersetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ properSuperset(5 Random):'.padEnd(padding), () => {
			const properSupersetMock = jest.fn(properSuperset);
			Timer.time('properSuperset', () => fewRandom.forEach(sets => properSupersetMock(...sets)));
			expect(properSupersetMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('properSuperset'));
});
