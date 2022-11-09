import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { subset } from '../../../src';
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

describe('subset @ scale', () => {
	describe('subset ⋅ large sets', () => {
		it('subset(of1):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(multiplesOf1));
			expect(result).toBe(true);
		});

		it('subset(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(multiplesOf1, multiplesOf1));
			expect(result).toBe(true);
		});

		it('subset(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(multiplesOf1, multiplesOf2));
			expect(result).toBe(false);
		});

		it('subset(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(multiplesOf2, multiplesOf1));
			expect(result).toBe(true);
		});

		it('subset(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result).toBe(true);
		});

		it('subset(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result).toBe(false);
		});

		it('subset(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result).toBe(false);
		});
	});

	describe('subset ⋅ many sets', () => {
		it('subset(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(...someEquivalent));
			expect(result).toBe(true);
		});

		it('subset(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(...manyEquivalent));
			expect(result).toBe(true);
		});

		it('subset(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(...someDisjoint));
			expect(result).toBe(false);
		});

		it('subset(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('subset', () => subset(...manyDisjoint));
			expect(result).toBe(false);
		});
	});

	describe('subset ⋅ many times', () => {
		it('100k ⋅ subset(2 Equivalent):'.padEnd(padding), () => {
			const subsetMock = jest.fn(subset);
			Timer.manyTimes('subset', () => subsetMock(...coupleEquivalent), times);
			expect(subsetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ subset(5 Equivalent):'.padEnd(padding), () => {
			const subsetMock = jest.fn(subset);
			Timer.manyTimes('subset', () => subsetMock(...fewEquivalent), times);
			expect(subsetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ subset(2 Disjoint):'.padEnd(padding), () => {
			const subsetMock = jest.fn(subset);
			Timer.manyTimes('subset', () => subsetMock(...coupleDisjoint), times);
			expect(subsetMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ subset(5 Disjoint):'.padEnd(padding), () => {
			const subsetMock = jest.fn(subset);
			Timer.manyTimes('subset', () => subsetMock(...fewDisjoint), times);
			expect(subsetMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('subset'));
});
