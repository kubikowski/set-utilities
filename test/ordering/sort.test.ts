import { describe, expect, it } from '@jest/globals';
import { equivalence, sort } from '../../src';
import { expectSortedValues, reverseComparator, standardComparator, unordered } from '../constants/sort-testing-constants';
import { empty, setA, universal } from '../constants/testing-constants';

describe('sort', () => {
	it('sorting the empty set returns the empty set', () => {
		const result = sort(empty);
		expect(equivalence(result, empty)).toBe(true);
	});

	it('sorting a set returns an equivalent set', () => {
		const result = sort(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('sorting a sorted set will result in the same ordering', () => {
		const ordered = Array.from(setA);
		const result = sort(setA, standardComparator);
		expectSortedValues(result, ordered);
	});

	it('sorting a reversed set will result in the reversed ordering', () => {
		const ordered = Array.from(setA).sort(reverseComparator);
		const result = sort(setA, reverseComparator);
		expectSortedValues(result, ordered);
	});

	it('sorting an unordered set will order it', () => {
		const ordered = Array.from(universal);
		const result = sort(unordered);
		expectSortedValues(result, ordered);
	});

	it('sorting an unordered set with standard comparator will reverse order it', () => {
		const ordered = Array.from(universal);
		const result = sort(unordered, standardComparator);
		expectSortedValues(result, ordered);
	});

	it('sorting an unordered set with reverse comparator will reverse order it', () => {
		const ordered = Array.from(universal).sort(reverseComparator);
		const result = sort(unordered, reverseComparator);
		expectSortedValues(result, ordered);
	});
});
