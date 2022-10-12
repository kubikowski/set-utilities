import { expect, it } from '@jest/globals';
import { difference, disjoint, equivalence, intersection, sort, subset, superset, union, xor } from '../src';
import { Multiples, Timer } from './constants/scale-testing-constants';
import { reverseComparator } from './constants/sort-testing-constants';

describe('Scale Tests', () => {
	const multiplesOf1 = Timer.time('copying multiples', Multiples.of1);
	const multiplesOf2 = Timer.time('copying multiples', Multiples.of2);
	const multiplesOf3 = Timer.time('copying multiples', Multiples.of3);
	Timer.log('copying multiples');

	describe('Operations', () => {
		it('difference scale tests', () => {
			const result1 = Timer.time('difference', () => difference(multiplesOf1));
			const result2 = Timer.time('difference', () => difference(multiplesOf1, multiplesOf2));
			const result3 = Timer.time('difference', () => difference(multiplesOf2, multiplesOf1));
			const result4 = Timer.time('difference', () => difference(multiplesOf1, multiplesOf2, multiplesOf3));
			const result5 = Timer.time('difference', () => difference(multiplesOf3, multiplesOf2, multiplesOf1));
			Timer.log('difference');

			expect(result1.size).toBe(15_000_000);
			expect(result2.size).toBe(7_500_000);
			expect(result3.size).toBe(0);
			expect(result4.size).toBe(5_000_000);
			expect(result5.size).toBe(0);
		});

		it('intersection scale tests', () => {
			const result1 = Timer.time('intersection', () => intersection(multiplesOf1));
			const result2 = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf2));
			const result3 = Timer.time('intersection', () => intersection(multiplesOf2, multiplesOf1));
			const result4 = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf2, multiplesOf3));
			const result5 = Timer.time('intersection', () => intersection(multiplesOf3, multiplesOf2, multiplesOf1));
			Timer.log('intersection');

			expect(result1.size).toBe(15_000_000);
			expect(result2.size).toBe(7_500_000);
			expect(result3.size).toBe(7_500_000);
			expect(result4.size).toBe(2_500_000);
			expect(result5.size).toBe(2_500_000);
		});

		it('union scale tests', () => {
			const result1 = Timer.time('union', () => union(multiplesOf1));
			const result2 = Timer.time('union', () => union(multiplesOf1, multiplesOf2));
			const result3 = Timer.time('union', () => union(multiplesOf2, multiplesOf1));
			const result4 = Timer.time('union', () => union(multiplesOf1, multiplesOf2, multiplesOf3));
			const result5 = Timer.time('union', () => union(multiplesOf3, multiplesOf2, multiplesOf1));
			Timer.log('union');

			expect(result1.size).toBe(15_000_000);
			expect(result2.size).toBe(15_000_000);
			expect(result3.size).toBe(15_000_000);
			expect(result4.size).toBe(15_000_000);
			expect(result5.size).toBe(15_000_000);
		});

		it('xor scale tests', () => {
			const result1 = Timer.time('xor', () => xor(multiplesOf1));
			const result2 = Timer.time('xor', () => xor(multiplesOf1, multiplesOf2));
			const result3 = Timer.time('xor', () => xor(multiplesOf2, multiplesOf1));
			const result4 = Timer.time('xor', () => xor(multiplesOf1, multiplesOf2, multiplesOf3));
			const result5 = Timer.time('xor', () => xor(multiplesOf3, multiplesOf2, multiplesOf1));
			Timer.log('xor');

			expect(result1.size).toBe(15_000_000);
			expect(result2.size).toBe(7_500_000);
			expect(result3.size).toBe(7_500_000);
			expect(result4.size).toBe(5_000_000);
			expect(result5.size).toBe(5_000_000);
		});
	});

	describe('Comparisons', () => {
		it('disjoint scale tests', () => {
			const result1 = Timer.time('disjoint', () => disjoint(multiplesOf1));
			const result2 = Timer.time('disjoint', () => disjoint(multiplesOf1, multiplesOf2));
			const result3 = Timer.time('disjoint', () => disjoint(multiplesOf2, multiplesOf1));
			const result4 = Timer.time('disjoint', () => disjoint(multiplesOf1, multiplesOf2, multiplesOf3));
			const result5 = Timer.time('disjoint', () => disjoint(multiplesOf3, multiplesOf2, multiplesOf1));
			Timer.log('disjoint');

			expect(result1).toBe(true);
			expect(result2).toBe(false);
			expect(result3).toBe(false);
			expect(result4).toBe(false);
			expect(result5).toBe(false);
		});

		it('equivalence scale tests', () => {
			const result1 = Timer.time('equivalence', () => equivalence(multiplesOf1));
			const result2 = Timer.time('equivalence', () => equivalence(multiplesOf1, multiplesOf2));
			const result3 = Timer.time('equivalence', () => equivalence(multiplesOf2, multiplesOf1));
			const result4 = Timer.time('equivalence', () => equivalence(multiplesOf1, multiplesOf2, multiplesOf3));
			const result5 = Timer.time('equivalence', () => equivalence(multiplesOf3, multiplesOf2, multiplesOf1));
			Timer.log('equivalence');

			expect(result1).toBe(true);
			expect(result2).toBe(false);
			expect(result3).toBe(false);
			expect(result4).toBe(false);
			expect(result5).toBe(false);
		});

		it('subset scale tests', () => {
			const result1 = Timer.time('subset', () => subset(multiplesOf1));
			const result2 = Timer.time('subset', () => subset(multiplesOf1, multiplesOf2));
			const result3 = Timer.time('subset', () => subset(multiplesOf2, multiplesOf1));
			const result4 = Timer.time('subset', () => subset(multiplesOf1, multiplesOf2, multiplesOf3));
			const result5 = Timer.time('subset', () => subset(multiplesOf3, multiplesOf2, multiplesOf1));
			Timer.log('subset');

			expect(result1).toBe(true);
			expect(result2).toBe(false);
			expect(result3).toBe(true);
			expect(result4).toBe(false);
			expect(result5).toBe(false);
		});

		it('superset scale tests', () => {
			const result1 = Timer.time('superset', () => superset(multiplesOf1));
			const result2 = Timer.time('superset', () => superset(multiplesOf1, multiplesOf2));
			const result3 = Timer.time('superset', () => superset(multiplesOf2, multiplesOf1));
			const result4 = Timer.time('superset', () => superset(multiplesOf1, multiplesOf2, multiplesOf3));
			const result5 = Timer.time('superset', () => superset(multiplesOf3, multiplesOf2, multiplesOf1));
			Timer.log('superset');

			expect(result1).toBe(true);
			expect(result2).toBe(true);
			expect(result3).toBe(false);
			expect(result4).toBe(true);
			expect(result5).toBe(false);
		});
	});

	describe('Ordering', () => {
		it('sort scale tests', () => {
			const result1 = Timer.time('sort', () => sort(multiplesOf1, reverseComparator));
			const result2 = Timer.time('sort', () => sort(multiplesOf2, reverseComparator));
			const result3 = Timer.time('sort', () => sort(multiplesOf3, reverseComparator));
			Timer.log('sort');

			expect(result1.size).toBe(15_000_000);
			expect(result2.size).toBe(7_500_000);
			expect(result3.size).toBe(5_000_000);
		});
	});
});
