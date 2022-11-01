import { expect, it } from '@jest/globals';
import {
	difference,
	disjoint,
	equivalence,
	intersection,
	pairwiseDisjoint,
	properSubset,
	properSuperset,
	sort,
	subset,
	superset,
	union,
	xor,
} from '../src';
import { Multiples } from './constants/multiples.model';
import { defaultComparator, reverseComparator } from './constants/sort-testing-constants';
import { Timer } from './constants/timer.model';

describe('Scale Tests', () => {
	const multiplesOf1 = Multiples.of1;
	const multiplesOf2 = Multiples.of2;
	const multiplesOf3 = Multiples.of3;

	const someEquivalent = Multiples.someEquivalent;
	const manyEquivalent = Multiples.manyEquivalent;
	const someDisjoint = Multiples.someDisjoint;
	const manyDisjoint = Multiples.manyDisjoint;

	const padding = 34;
	Timer.logAll();

	describe('Operations', () => {
		describe('difference', () => {
			it('difference(of1):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('difference(of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(multiplesOf1, multiplesOf1));
				expect(result.size).toBe(0);
			});
			it('difference(of1, of2):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(multiplesOf1, multiplesOf2));
				expect(result.size).toBe(7_500_000);
			});
			it('difference(of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(multiplesOf2, multiplesOf1));
				expect(result.size).toBe(0);
			});
			it('difference(of1, of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(multiplesOf1, multiplesOf1, multiplesOf1));
				expect(result.size).toBe(0);
			});
			it('difference(of1, of2, of3):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result.size).toBe(5_000_000);
			});
			it('difference(of3, of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result.size).toBe(0);
			});
			it('difference(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(...someEquivalent));
				expect(result.size).toBe(0);
			});
			it('difference(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(...manyEquivalent));
				expect(result.size).toBe(0);
			});
			it('difference(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(...someDisjoint));
				expect(result.size).toBe(100_000);
			});
			it('difference(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(...manyDisjoint));
				expect(result.size).toBe(1_000);
			});
			afterAll(() => Timer.log('difference'));
		});

		describe('intersection', () => {
			it('intersection(of1):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('intersection(of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('intersection(of1, of2):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf2));
				expect(result.size).toBe(7_500_000);
			});
			it('intersection(of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(multiplesOf2, multiplesOf1));
				expect(result.size).toBe(7_500_000);
			});
			it('intersection(of1, of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf1, multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('intersection(of1, of2, of3):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result.size).toBe(2_500_000);
			});
			it('intersection(of3, of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result.size).toBe(2_500_000);
			});
			it('intersection(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(...someEquivalent));
				expect(result.size).toBe(100_000);
			});
			it('intersection(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(...manyEquivalent));
				expect(result.size).toBe(1_000);
			});
			it('intersection(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(...someDisjoint));
				expect(result.size).toBe(0);
			});
			it('intersection(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(...manyDisjoint));
				expect(result.size).toBe(0);
			});
			afterAll(() => Timer.log('intersection'));
		});

		describe('union', () => {
			it('union(of1):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('union(of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(multiplesOf1, multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('union(of1, of2):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(multiplesOf1, multiplesOf2));
				expect(result.size).toBe(15_000_000);
			});
			it('union(of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(multiplesOf2, multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('union(of1, of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(multiplesOf1, multiplesOf1, multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('union(of1, of2, of3):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result.size).toBe(15_000_000);
			});
			it('union(of3, of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result.size).toBe(15_000_000);
			});
			it('union(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(...someEquivalent));
				expect(result.size).toBe(100_000);
			});
			it('union(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(...manyEquivalent));
				expect(result.size).toBe(1_000);
			});
			it('union(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(...someDisjoint));
				expect(result.size).toBe(10_000_000);
			});
			it('union(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(...manyDisjoint));
				expect(result.size).toBe(10_000_000);
			});
			afterAll(() => Timer.log('union'));
		});

		describe('xor', () => {
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
			it('xor(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('xor', () => xor(...someEquivalent));
				expect(result.size).toBe(0);
			});
			it('xor(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('xor', () => xor(...manyEquivalent));
				expect(result.size).toBe(0);
			});
			it('xor(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('xor', () => xor(...someDisjoint));
				expect(result.size).toBe(10_000_000);
			});
			it('xor(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('xor', () => xor(...manyDisjoint));
				expect(result.size).toBe(10_000_000);
			});
			afterAll(() => Timer.log('xor'));
		});
	});

	describe('Comparisons', () => {
		describe('disjoint', () => {
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
			it('disjoint(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('disjoint', () => disjoint(...someEquivalent));
				expect(result).toBe(false);
			});
			it('disjoint(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('disjoint', () => disjoint(...manyEquivalent));
				expect(result).toBe(false);
			});
			it('disjoint(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('disjoint', () => disjoint(...someDisjoint));
				expect(result).toBe(true);
			});
			it('disjoint(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('disjoint', () => disjoint(...manyDisjoint));
				expect(result).toBe(true);
			});
			afterAll(() => Timer.log('disjoint'));
		});

		describe('equivalence', () => {
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
			it('equivalence(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('equivalence', () => equivalence(...someEquivalent));
				expect(result).toBe(true);
			});
			it('equivalence(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('equivalence', () => equivalence(...manyEquivalent));
				expect(result).toBe(true);
			});
			it('equivalence(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('equivalence', () => equivalence(...someDisjoint));
				expect(result).toBe(false);
			});
			it('equivalence(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('equivalence', () => equivalence(...manyDisjoint));
				expect(result).toBe(false);
			});
			afterAll(() => Timer.log('equivalence'));
		});

		describe('pairwise disjoint', () => {
			it('pairwiseDisjoint(of1):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1));
				expect(result).toBe(true);
			});
			it('pairwiseDisjoint(of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1, multiplesOf1));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(of1, of2):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1, multiplesOf2));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf2, multiplesOf1));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(of1, of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1, multiplesOf1, multiplesOf1));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(of1, of2, of3):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(of3, of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...someEquivalent));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...manyEquivalent));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...someDisjoint));
				expect(result).toBe(true);
			});
			it('pairwiseDisjoint(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...manyDisjoint));
				expect(result).toBe(true);
			});
			afterAll(() => Timer.log('pairwiseDisjoint'));
		});

		describe('proper subset', () => {
			it('properSubset(of1):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(multiplesOf1));
				expect(result).toBe(true);
			});
			it('properSubset(of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(multiplesOf1, multiplesOf1));
				expect(result).toBe(false);
			});
			it('properSubset(of1, of2):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(multiplesOf1, multiplesOf2));
				expect(result).toBe(false);
			});
			it('properSubset(of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(multiplesOf2, multiplesOf1));
				expect(result).toBe(true);
			});
			it('properSubset(of1, of1, of1):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(multiplesOf1, multiplesOf1, multiplesOf1));
				expect(result).toBe(false);
			});
			it('properSubset(of1, of2, of3):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(multiplesOf1, multiplesOf2, multiplesOf3));
				expect(result).toBe(false);
			});
			it('properSubset(of3, of2, of1):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(multiplesOf3, multiplesOf2, multiplesOf1));
				expect(result).toBe(false);
			});
			it('properSubset(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(...someEquivalent));
				expect(result).toBe(false);
			});
			it('properSubset(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(...manyEquivalent));
				expect(result).toBe(false);
			});
			it('properSubset(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(...someDisjoint));
				expect(result).toBe(false);
			});
			it('properSubset(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(...manyDisjoint));
				expect(result).toBe(false);
			});
			afterAll(() => Timer.log('properSubset'));
		});

		describe('proper superset', () => {
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
			it('properSuperset(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('properSuperset', () => properSuperset(...someEquivalent));
				expect(result).toBe(false);
			});
			it('properSuperset(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('properSuperset', () => properSuperset(...manyEquivalent));
				expect(result).toBe(false);
			});
			it('properSuperset(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('properSuperset', () => properSuperset(...someDisjoint));
				expect(result).toBe(false);
			});
			it('properSuperset(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('properSuperset', () => properSuperset(...manyDisjoint));
				expect(result).toBe(false);
			});
			afterAll(() => Timer.log('properSuperset'));
		});

		describe('subset', () => {
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
			it('subset(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('subset', () => subset(...someEquivalent));
				expect(result).toBe(true);
			});
			it('subset(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('subset', () => subset(...manyEquivalent));
				expect(result).toBe(true);
			});
			it('subset(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('subset', () => subset(...someDisjoint));
				expect(result).toBe(false);
			});
			it('subset(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('subset', () => subset(...manyDisjoint));
				expect(result).toBe(false);
			});
			afterAll(() => Timer.log('subset'));
		});

		describe('superset', () => {
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
			it('superset(...someEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('superset', () => superset(...someEquivalent));
				expect(result).toBe(true);
			});
			it('superset(...manyEquivalent):'.padEnd(padding), () => {
				const result = Timer.time('superset', () => superset(...manyEquivalent));
				expect(result).toBe(true);
			});
			it('superset(...someDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('superset', () => superset(...someDisjoint));
				expect(result).toBe(false);
			});
			it('superset(...manyDisjoint):'.padEnd(padding), () => {
				const result = Timer.time('superset', () => superset(...manyDisjoint));
				expect(result).toBe(false);
			});
			afterAll(() => Timer.log('superset'));
		});
	});

	describe('Ordering', () => {
		describe('sort', () => {
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
			afterAll(() => Timer.log('sort'));
		});
	});
});
