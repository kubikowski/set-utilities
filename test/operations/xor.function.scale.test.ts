import { afterAll, describe, expect, it, jest } from '@jest/globals';
import { xor } from '../../src';
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
} from '../util/scale/scale-testing.constants';
import { Timer } from '../util/scale/timer.model';

export function xorScaleTests(): void {

	describe('xor ⋅ large sets', () => {
		it('xor(of1):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(multiplesOf1));
			expect(result.size).toBe(15_000_000);
		});

		it('xor(of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(multiplesOf1, multiplesOf1));
			expect(result.size).toBe(0);
		});

		it('xor(of1, of2):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(multiplesOf1, multiplesOf2));
			expect(result.size).toBe(7_500_000);
		});

		it('xor(of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(multiplesOf2, multiplesOf1));
			expect(result.size).toBe(7_500_000);
		});

		it('xor(of1, of1, of1):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(multiplesOf1, multiplesOf1, multiplesOf1));
			expect(result.size).toBe(0);
		});

		it('xor(of1, of2, of3):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(multiplesOf1, multiplesOf2, multiplesOf3));
			expect(result.size).toBe(5_000_000);
		});

		it('xor(of3, of2, of1):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(multiplesOf3, multiplesOf2, multiplesOf1));
			expect(result.size).toBe(5_000_000);
		});
	});

	describe('xor ⋅ many sets', () => {
		it('xor(100 Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(...someEquivalent));
			expect(result.size).toBe(0);
		});

		it('xor(10k Equivalent):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(...manyEquivalent));
			expect(result.size).toBe(0);
		});

		it('xor(100 Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(...someDisjoint));
			expect(result.size).toBe(10_000_000);
		});

		it('xor(10k Disjoint):'.padEnd(padding), () => {
			const result = Timer.time('xor', () => xor(...manyDisjoint));
			expect(result.size).toBe(10_000_000);
		});
	});

	describe('xor ⋅ many times', () => {
		it('100k ⋅ xor(2 Equivalent):'.padEnd(padding), () => {
			const xorMock = jest.fn(xor);
			Timer.manyTimes('xor', () => xorMock(...coupleEquivalent), times);
			expect(xorMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ xor(5 Equivalent):'.padEnd(padding), () => {
			const xorMock = jest.fn(xor);
			Timer.manyTimes('xor', () => xorMock(...fewEquivalent), times);
			expect(xorMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ xor(2 Disjoint):'.padEnd(padding), () => {
			const xorMock = jest.fn(xor);
			Timer.manyTimes('xor', () => xorMock(...coupleDisjoint), times);
			expect(xorMock).toHaveBeenCalledTimes(times);
		});

		it('100k ⋅ xor(5 Disjoint):'.padEnd(padding), () => {
			const xorMock = jest.fn(xor);
			Timer.manyTimes('xor', () => xorMock(...fewDisjoint), times);
			expect(xorMock).toHaveBeenCalledTimes(times);
		});
	});

	afterAll(() => Timer.log('xor'));
}
