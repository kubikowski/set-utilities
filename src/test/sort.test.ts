import { describe, expect, it } from '@jest/globals';
import { equivalence, sort } from '../index';
import { empty, reverseComparator, setA, standardComparator } from './constants/testing-constants';

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

		let index = 0;
		result.forEach(value => {
			expect(value).toBe(ordered[index++]);
		});
	});

	it('sorting a reversed set will result in the reversed ordering', () => {
		const ordered = Array.from(setA);
		const result = sort(setA, reverseComparator);

		let index = ordered.length - 1;
		result.forEach(value => {
			expect(value).toBe(ordered[index--]);
		});
	});
});
