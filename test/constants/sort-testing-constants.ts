import { expect } from '@jest/globals';

/* unordered universal set, contains: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
export const unordered = new Set<number>([ 4, 9, 6, 1, 8, 2, 5, 7, 0, 3 ]);

/* unordered set of 100 elements, contains: 0 - 99 */
export const manyUnordered = new Set<number>([
	98, 49, 85, 53, 83, 57, 86, 94, 82, 47,
	21, 45, 29, 15, 66, 64, 76, 84, 9, 73,
	26, 80, 32, 91, 65, 38, 14, 24, 13, 78,
	10, 37, 92, 95, 18, 69, 6, 25, 3, 87,
	51, 48, 71, 81, 77, 27, 41, 79, 97, 33,
	60, 89, 55, 36, 63, 50, 93, 30, 4, 62,
	8, 31, 17, 88, 40, 39, 46, 52, 56, 42,
	72, 28, 44, 59, 43, 99, 68, 35, 2, 90,
	96, 19, 54, 70, 7, 61, 75, 23, 22, 5,
	11, 34, 16, 67, 0, 20, 12, 74, 1, 58,
]);

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
