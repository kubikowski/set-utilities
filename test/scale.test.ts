import { expect, it } from '@jest/globals';
import { difference, disjoint, equivalence, intersection, sort, subset, superset, union, xor } from '../src';
import { Multiples } from './constants/multiples.model';
import { reverseComparator } from './constants/sort-testing-constants';
import { Timer } from './constants/timer.model';

describe('Scale Tests', () => {
	const multiplesOf1 = Multiples.of1;
	const multiplesOf2 = Multiples.of2;
	const multiplesOf3 = Multiples.of3;
	Timer.logAll();

	describe('Operations', () => {
		describe('difference', () => {
			it('difference(of1):          ', () => {
				const result1 = Timer.time('difference', () => difference(multiplesOf1));
				expect(result1.size).toBe(15_000_000);
			});
			it('difference(of1, of2):     ', () => {
				const result2 = Timer.time('difference', () => difference(multiplesOf1, multiplesOf2));
				expect(result2.size).toBe(7_500_000);
			});
			it('difference(of2, of1):     ', () => {
				const result3 = Timer.time('difference', () => difference(multiplesOf2, multiplesOf1));
				expect(result3.size).toBe(0);
			});
			it('difference(of1, of2, of3):', () => {
				const result4 = Timer.time('difference', () => difference(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result4.size).toBe(5_000_000);
			});
			it('difference(of3, of2, of1):', () => {
				const result5 = Timer.time('difference', () => difference(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result5.size).toBe(0);
			});
			afterAll(() => Timer.log('difference'));
		});

		describe('intersection', () => {
			it('intersection(of1):          ', () => {
				const result1 = Timer.time('intersection', () => intersection(multiplesOf1));
				expect(result1.size).toBe(15_000_000);
			});
			it('intersection(of1, of2):     ', () => {
				const result2 = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf2));
				expect(result2.size).toBe(7_500_000);
			});
			it('intersection(of2, of1):     ', () => {
				const result3 = Timer.time('intersection', () => intersection(multiplesOf2, multiplesOf1));
				expect(result3.size).toBe(7_500_000);
			});
			it('intersection(of1, of2, of3):', () => {
				const result4 = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result4.size).toBe(2_500_000);
			});
			it('intersection(of3, of2, of1):', () => {
				const result5 = Timer.time('intersection', () => intersection(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result5.size).toBe(2_500_000);
			});
			afterAll(() => Timer.log('intersection'));
		});

		describe('union', () => {
			it('union(of1):          ', () => {
				const result1 = Timer.time('union', () => union(multiplesOf1));
				expect(result1.size).toBe(15_000_000);
			});
			it('union(of1, of2):     ', () => {
				const result2 = Timer.time('union', () => union(multiplesOf1, multiplesOf2));
				expect(result2.size).toBe(15_000_000);
			});
			it('union(of2, of1):     ', () => {
				const result3 = Timer.time('union', () => union(multiplesOf2, multiplesOf1));
				expect(result3.size).toBe(15_000_000);
			});
			it('union(of1, of2, of3):', () => {
				const result4 = Timer.time('union', () => union(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result4.size).toBe(15_000_000);
			});
			it('union(of3, of2, of1):', () => {
				const result5 = Timer.time('union', () => union(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result5.size).toBe(15_000_000);
			});
			afterAll(() => Timer.log('union'));
		});

		describe('xor', () => {
			it('xor(of1):          ', () => {
				const result1 = Timer.time('xor', () => xor(multiplesOf1));
				expect(result1.size).toBe(15_000_000);
			});
			it('xor(of1, of2):     ', () => {
				const result2 = Timer.time('xor', () => xor(multiplesOf1, multiplesOf2));
				expect(result2.size).toBe(7_500_000);
			});
			it('xor(of2, of1):     ', () => {
				const result3 = Timer.time('xor', () => xor(multiplesOf2, multiplesOf1));
				expect(result3.size).toBe(7_500_000);
			});
			it('xor(of1, of2, of3):', () => {
				const result4 = Timer.time('xor', () => xor(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result4.size).toBe(5_000_000);
			});
			it('xor(of3, of2, of1):', () => {
				const result5 = Timer.time('xor', () => xor(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result5.size).toBe(5_000_000);
			});
			afterAll(() => Timer.log('xor'));
		});
	});

	describe('Comparisons', () => {
		describe('disjoint', () => {
			it('disjoint(of1):          ', () => {
				const result1 = Timer.time('disjoint', () => disjoint(multiplesOf1));
				expect(result1).toBe(true);
			});
			it('disjoint(of1, of2):     ', () => {
				const result2 = Timer.time('disjoint', () => disjoint(multiplesOf1, multiplesOf2));
				expect(result2).toBe(false);
			});
			it('disjoint(of2, of1):     ', () => {
				const result3 = Timer.time('disjoint', () => disjoint(multiplesOf2, multiplesOf1));
				expect(result3).toBe(false);
			});
			it('disjoint(of1, of2, of3):', () => {
				const result4 = Timer.time('disjoint', () => disjoint(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result4).toBe(false);
			});
			it('disjoint(of3, of2, of1):', () => {
				const result5 = Timer.time('disjoint', () => disjoint(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result5).toBe(false);
			});
			afterAll(() => Timer.log('disjoint'));
		});

		describe('equivalence', () => {
			it('equivalence(of1):          ', () => {
				const result1 = Timer.time('equivalence', () => equivalence(multiplesOf1));
				expect(result1).toBe(true);
			});
			it('equivalence(of1, of2):     ', () => {
				const result2 = Timer.time('equivalence', () => equivalence(multiplesOf1, multiplesOf2));
				expect(result2).toBe(false);
			});
			it('equivalence(of2, of1):     ', () => {
				const result3 = Timer.time('equivalence', () => equivalence(multiplesOf2, multiplesOf1));
				expect(result3).toBe(false);
			});
			it('equivalence(of1, of2, of3):', () => {
				const result4 = Timer.time('equivalence', () => equivalence(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result4).toBe(false);
			});
			it('equivalence(of3, of2, of1):', () => {
				const result5 = Timer.time('equivalence', () => equivalence(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result5).toBe(false);
			});
			afterAll(() => Timer.log('equivalence'));
		});

		describe('subset', () => {
			it('subset(of1):          ', () => {
				const result1 = Timer.time('subset', () => subset(multiplesOf1));
				expect(result1).toBe(true);
			});
			it('subset(of1, of2):     ', () => {
				const result2 = Timer.time('subset', () => subset(multiplesOf1, multiplesOf2));
				expect(result2).toBe(false);
			});
			it('subset(of2, of1):     ', () => {
				const result3 = Timer.time('subset', () => subset(multiplesOf2, multiplesOf1));
				expect(result3).toBe(true);
			});
			it('subset(of1, of2, of3):', () => {
				const result4 = Timer.time('subset', () => subset(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result4).toBe(false);
			});
			it('subset(of3, of2, of1):', () => {
				const result5 = Timer.time('subset', () => subset(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result5).toBe(false);
			});
			afterAll(() => Timer.log('subset'));
		});

		describe('superset', () => {
			it('superset(of1):          ', () => {
				const result1 = Timer.time('superset', () => superset(multiplesOf1));
				expect(result1).toBe(true);
			});
			it('superset(of1, of2):     ', () => {
				const result2 = Timer.time('superset', () => superset(multiplesOf1, multiplesOf2));
				expect(result2).toBe(true);
			});
			it('superset(of2, of1):     ', () => {
				const result3 = Timer.time('superset', () => superset(multiplesOf2, multiplesOf1));
				expect(result3).toBe(false);
			});
			it('superset(of1, of2, of3):', () => {
				const result4 = Timer.time('superset', () => superset(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result4).toBe(true);
			});
			it('superset(of3, of2, of1):', () => {
				const result5 = Timer.time('superset', () => superset(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result5).toBe(false);
			});
			afterAll(() => Timer.log('superset'));
		});
	});

	describe('Ordering', () => {
		describe('sort', () => {
			it('sort(of1):', () => {
				const result1 = Timer.time('sort', () => sort(multiplesOf1, reverseComparator));
				expect(result1.size).toBe(15_000_000);
			});
			it('sort(of2):', () => {
				const result2 = Timer.time('sort', () => sort(multiplesOf2, reverseComparator));
				expect(result2.size).toBe(7_500_000);
			});
			it('sort(of3):', () => {
				const result3 = Timer.time('sort', () => sort(multiplesOf3, reverseComparator));
				expect(result3.size).toBe(5_000_000);
			});
			afterAll(() => Timer.log('sort'));
		});
	});
});
