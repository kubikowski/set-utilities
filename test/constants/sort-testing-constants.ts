import { expect } from '@jest/globals';

/* unordered universal set, contains: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
export const unordered = new Set([ 4, 9, 6, 1, 8, 2, 5, 7, 0, 3 ]);

/* (default) less than comparator function */
export function defaultComparator<T>(a: T, b: T): number {
	return (a < b) ? -1 : 1;
}
/* (reversed) greater than comparator function */
export function reverseComparator<T>(a: T, b: T): number {
	return (a > b) ? -1 : 1;
}

/**
 * Iterates through values in the result set,
 * and expects them to equal the respectively indexed
 * value in the provided expectedOrder array.
 */
export function expectSortedValues<T>(result: Set<T>, expectedOrder: Array<T>): void {
	let index = 0;
	result.forEach(value => {
		expect(value).toBe(expectedOrder[index++]);
	});
}
