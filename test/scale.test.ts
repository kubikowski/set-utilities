import { afterAll, describe, expect, it, jest } from '@jest/globals';
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
import { defaultComparator, manyUnordered, reverseComparator } from './constants/sort-testing-constants';
import { Timer } from './constants/timer.model';

describe('Scale Tests', () => {
	const multiplesOf1 = Multiples.of1;
	const multiplesOf2 = Multiples.of2;
	const multiplesOf3 = Multiples.of3;

	const someEquivalent = Multiples.someEquivalent;
	const manyEquivalent = Multiples.manyEquivalent;
	const someDisjoint = Multiples.someDisjoint;
	const manyDisjoint = Multiples.manyDisjoint;

	const coupleEquivalent = Multiples.coupleEquivalent;
	const fewEquivalent = Multiples.fewEquivalent;
	const coupleDisjoint = Multiples.coupleDisjoint;
	const fewDisjoint = Multiples.fewDisjoint;
	const times = 100_000;

	const padding = 38;
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
			it('difference(100 Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(...someEquivalent));
				expect(result.size).toBe(0);
			});
			it('difference(10k Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(...manyEquivalent));
				expect(result.size).toBe(0);
			});
			it('difference(100 Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(...someDisjoint));
				expect(result.size).toBe(100_000);
			});
			it('difference(10k Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('difference', () => difference(...manyDisjoint));
				expect(result.size).toBe(1_000);
			});
			it('100k ⋅ difference(2 Equivalent):'.padEnd(padding), () => {
				const differenceMock = jest.fn(difference);
				Timer.manyTimes('difference', () => differenceMock(...coupleEquivalent), times);
				expect(differenceMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ difference(5 Equivalent):'.padEnd(padding), () => {
				const differenceMock = jest.fn(difference);
				Timer.manyTimes('difference', () => differenceMock(...fewEquivalent), times);
				expect(differenceMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ difference(2 Disjoint):'.padEnd(padding), () => {
				const differenceMock = jest.fn(difference);
				Timer.manyTimes('difference', () => differenceMock(...coupleDisjoint), times);
				expect(differenceMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ difference(5 Disjoint):'.padEnd(padding), () => {
				const differenceMock = jest.fn(difference);
				Timer.manyTimes('difference', () => differenceMock(...fewDisjoint), times);
				expect(differenceMock).toHaveBeenCalledTimes(times);
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
			it('intersection(100 Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(...someEquivalent));
				expect(result.size).toBe(100_000);
			});
			it('intersection(10k Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(...manyEquivalent));
				expect(result.size).toBe(1_000);
			});
			it('intersection(100 Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(...someDisjoint));
				expect(result.size).toBe(0);
			});
			it('intersection(10k Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('intersection', () => intersection(...manyDisjoint));
				expect(result.size).toBe(0);
			});
			it('100k ⋅ intersection(2 Equivalent):'.padEnd(padding), () => {
				const intersectionMock = jest.fn(intersection);
				Timer.manyTimes('intersection', () => intersectionMock(...coupleEquivalent), times);
				expect(intersectionMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ intersection(5 Equivalent):'.padEnd(padding), () => {
				const intersectionMock = jest.fn(intersection);
				Timer.manyTimes('intersection', () => intersectionMock(...fewEquivalent), times);
				expect(intersectionMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ intersection(2 Disjoint):'.padEnd(padding), () => {
				const intersectionMock = jest.fn(intersection);
				Timer.manyTimes('intersection', () => intersectionMock(...coupleDisjoint), times);
				expect(intersectionMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ intersection(5 Disjoint):'.padEnd(padding), () => {
				const intersectionMock = jest.fn(intersection);
				Timer.manyTimes('intersection', () => intersectionMock(...fewDisjoint), times);
				expect(intersectionMock).toHaveBeenCalledTimes(times);
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
			it('union(100 Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(...someEquivalent));
				expect(result.size).toBe(100_000);
			});
			it('union(10k Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(...manyEquivalent));
				expect(result.size).toBe(1_000);
			});
			it('union(100 Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(...someDisjoint));
				expect(result.size).toBe(10_000_000);
			});
			it('union(10k Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('union', () => union(...manyDisjoint));
				expect(result.size).toBe(10_000_000);
			});
			it('100k ⋅ union(2 Equivalent):'.padEnd(padding), () => {
				const unionMock = jest.fn(union);
				Timer.manyTimes('union', () => unionMock(...coupleEquivalent), times);
				expect(unionMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ union(5 Equivalent):'.padEnd(padding), () => {
				const unionMock = jest.fn(union);
				Timer.manyTimes('union', () => unionMock(...fewEquivalent), times);
				expect(unionMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ union(2 Disjoint):'.padEnd(padding), () => {
				const unionMock = jest.fn(union);
				Timer.manyTimes('union', () => unionMock(...coupleDisjoint), times);
				expect(unionMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ union(5 Disjoint):'.padEnd(padding), () => {
				const unionMock = jest.fn(union);
				Timer.manyTimes('union', () => unionMock(...fewDisjoint), times);
				expect(unionMock).toHaveBeenCalledTimes(times);
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
			it('pairwiseDisjoint(100 Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...someEquivalent));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(10k Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...manyEquivalent));
				expect(result).toBe(false);
			});
			it('pairwiseDisjoint(100 Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...someDisjoint));
				expect(result).toBe(true);
			});
			it('pairwiseDisjoint(10k Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('pairwiseDisjoint', () => pairwiseDisjoint(...manyDisjoint));
				expect(result).toBe(true);
			});
			it('100k ⋅ pairwiseDisjoint(2 Equivalent):'.padEnd(padding), () => {
				const pairwiseDisjointMock = jest.fn(pairwiseDisjoint);
				Timer.manyTimes('pairwiseDisjoint', () => pairwiseDisjointMock(...coupleEquivalent), times);
				expect(pairwiseDisjointMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ pairwiseDisjoint(5 Equivalent):'.padEnd(padding), () => {
				const pairwiseDisjointMock = jest.fn(pairwiseDisjoint);
				Timer.manyTimes('pairwiseDisjoint', () => pairwiseDisjointMock(...fewEquivalent), times);
				expect(pairwiseDisjointMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ pairwiseDisjoint(2 Disjoint):'.padEnd(padding), () => {
				const pairwiseDisjointMock = jest.fn(pairwiseDisjoint);
				Timer.manyTimes('pairwiseDisjoint', () => pairwiseDisjointMock(...coupleDisjoint), times);
				expect(pairwiseDisjointMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ pairwiseDisjoint(5 Disjoint):'.padEnd(padding), () => {
				const pairwiseDisjointMock = jest.fn(pairwiseDisjoint);
				Timer.manyTimes('pairwiseDisjoint', () => pairwiseDisjointMock(...fewDisjoint), times);
				expect(pairwiseDisjointMock).toHaveBeenCalledTimes(times);
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
			it('properSubset(100 Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(...someEquivalent));
				expect(result).toBe(false);
			});
			it('properSubset(10k Equivalent):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(...manyEquivalent));
				expect(result).toBe(false);
			});
			it('properSubset(100 Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(...someDisjoint));
				expect(result).toBe(false);
			});
			it('properSubset(10k Disjoint):'.padEnd(padding), () => {
				const result = Timer.time('properSubset', () => properSubset(...manyDisjoint));
				expect(result).toBe(false);
			});
			it('100k ⋅ properSubset(2 Equivalent):'.padEnd(padding), () => {
				const properSubsetMock = jest.fn(properSubset);
				Timer.manyTimes('properSubset', () => properSubsetMock(...coupleEquivalent), times);
				expect(properSubsetMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ properSubset(5 Equivalent):'.padEnd(padding), () => {
				const properSubsetMock = jest.fn(properSubset);
				Timer.manyTimes('properSubset', () => properSubsetMock(...fewEquivalent), times);
				expect(properSubsetMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ properSubset(2 Disjoint):'.padEnd(padding), () => {
				const properSubsetMock = jest.fn(properSubset);
				Timer.manyTimes('properSubset', () => properSubsetMock(...coupleDisjoint), times);
				expect(properSubsetMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ properSubset(5 Disjoint):'.padEnd(padding), () => {
				const properSubsetMock = jest.fn(properSubset);
				Timer.manyTimes('properSubset', () => properSubsetMock(...fewDisjoint), times);
				expect(properSubsetMock).toHaveBeenCalledTimes(times);
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
			it('100k ⋅ sort(100):'.padEnd(padding), () => {
				const sortMock = jest.fn(sort);
				Timer.manyTimes('sort', () => sortMock(manyUnordered), times);
				expect(sortMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ sort(100, default):'.padEnd(padding), () => {
				const sortMock = jest.fn(sort);
				Timer.manyTimes('sort', () => sortMock(manyUnordered, defaultComparator), times);
				expect(sortMock).toHaveBeenCalledTimes(times);
			});
			it('100k ⋅ sort(100, reverse):'.padEnd(padding), () => {
				const sortMock = jest.fn(sort);
				Timer.manyTimes('sort', () => sortMock(manyUnordered, reverseComparator), times);
				expect(sortMock).toHaveBeenCalledTimes(times);
			});
			afterAll(() => Timer.log('sort'));
		});
	});
});
