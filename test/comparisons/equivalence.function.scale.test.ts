import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { equivalence } from '../../src';
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
} from '../constants/scale-testing.constants';
import { Timer } from '../constants/timer.model';

export function equivalenceScaleTest(): void {

	describe('equivalence ⋅ large sets', () => {
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
	});

	describe('equivalence ⋅ many sets', () => {
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
	});

	describe('equivalence ⋅ many times', () => {
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
	});

	afterAll(() => Timer.log('equivalence'));
}
