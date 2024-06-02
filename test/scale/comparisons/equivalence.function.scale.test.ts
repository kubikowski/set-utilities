import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { equivalence } from '../../../src';
import { ScaleTestSets } from '../../util/scale/scale-test-sets.model';
import { padding, times } from '../../util/scale/scale-test.constants';
import { Timer } from '../../util/scale/timer.model';

describe('equivalence @ scale', () => {
	describe('equivalence ⋅ 2 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf2B } = ScaleTestSets;

		it('equivalence(of1):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf1));
			expect(result).toBe(true);
		});

		it('equivalence(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf1, multiplesOf1));
			expect(result).toBe(true);
		});

		it('equivalence(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf1, multiplesOf2));
			expect(result).toBe(false);
		});

		it('equivalence(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('equivalence(of2, of2B):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf2, multiplesOf2B));
			expect(result).toBe(false);
		});
	});

	describe('equivalence ⋅ 3 large sets', () => {
		const { multiplesOf1, multiplesOf2, multiplesOf3, multiplesOf3B, multiplesOf3C } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('equivalence'));

		it('equivalence(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result).toBe(true);
		});

		it('equivalence(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result).toBe(false);
		});

		it('equivalence(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});

		it('equivalence(of3, of3B, of3C):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(multiplesOf3, multiplesOf3B, multiplesOf3C));
			expect(result).toBe(false);
		});
	});

	describe('equivalence ⋅ many sets', () => {
		const { manyDisjoint, manyEquivalent, manyRandom, someDisjoint, someEquivalent, someRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('equivalence'));

		it('equivalence(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(...someEquivalent));
			expect(result).toBe(true);
		});

		it('equivalence(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(...manyEquivalent));
			expect(result).toBe(true);
		});

		it('equivalence(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(...someDisjoint));
			expect(result).toBe(false);
		});

		it('equivalence(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(...manyDisjoint));
			expect(result).toBe(false);
		});

		it('equivalence(100 Random):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(...someRandom));
			expect(result).toBe(false);
		});

		it('equivalence(10k Random):'.padEnd(padding), () => {
			const result = Timer.time('equivalence', () => equivalence(...manyRandom));
			expect(result).toBe(false);
		});
	});

	describe('equivalence ⋅ many times', () => {
		const { coupleDisjoint, coupleEquivalent, coupleRandom, fewDisjoint, fewEquivalent, fewRandom } = ScaleTestSets;
		beforeAll(() => Timer.nextLine('equivalence'));

		it('100k ⋅ equivalence(2 Equivalent):'.padEnd(padding), () => {
			const equivalenceMock = jest.fn(equivalence);
			Timer.manyTimes('equivalence', () => equivalenceMock(...coupleEquivalent), times);
			expect(equivalenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ equivalence(5 Equivalent):'.padEnd(padding), () => {
			const equivalenceMock = jest.fn(equivalence);
			Timer.manyTimes('equivalence', () => equivalenceMock(...fewEquivalent), times);
			expect(equivalenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ equivalence(2 Disjoint):'.padEnd(padding), () => {
			const equivalenceMock = jest.fn(equivalence);
			Timer.manyTimes('equivalence', () => equivalenceMock(...coupleDisjoint), times);
			expect(equivalenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ equivalence(5 Disjoint):'.padEnd(padding), () => {
			const equivalenceMock = jest.fn(equivalence);
			Timer.manyTimes('equivalence', () => equivalenceMock(...fewDisjoint), times);
			expect(equivalenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ equivalence(2 Random):'.padEnd(padding), () => {
			const equivalenceMock = jest.fn(equivalence);
			Timer.time('equivalence', () => coupleRandom.forEach(sets => equivalenceMock(...sets)));
			expect(equivalenceMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ equivalence(5 Random):'.padEnd(padding), () => {
			const equivalenceMock = jest.fn(equivalence);
			Timer.time('equivalence', () => fewRandom.forEach(sets => equivalenceMock(...sets)));
			expect(equivalenceMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('equivalence'));
});
