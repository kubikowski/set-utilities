import { describe, expect, it } from '@jest/globals';
import { equivalence, sort } from '../../src';
import { NumberTestSets } from '../util/test-sets/number-test-sets.model';
import { StringTestSets } from '../util/test-sets/string-test-sets.model';
import { SymbolTestSets } from '../util/test-sets/symbol-test-sets.model';
import { TestSets } from '../util/test-sets/test-sets.model';

describe('sort', () => {
	describe('sort ⋅ number', () => sortTests(new NumberTestSets()));
	describe('sort ⋅ string', () => sortTests(new StringTestSets()));
	describe('sort ⋅ symbol', () => sortTests(new SymbolTestSets()));
});

function sortTests<T>(testSets: TestSets<T>): void {
	const { a, b, c, d, defaultComparator, e, empty, f, g, h, i, j, reverseComparator, setA, universal } = testSets;
	const unordered = new Set<T>([ e, j, g, b, i, c, f, h, a, d ]);

	it('sorting the empty set returns the empty set', () => {
		const result = sort(empty);
		expect(equivalence(result, empty)).toBe(true);
	});

	if (typeof a === 'number' || typeof a === 'string') {
		it('sorting a set returns an equivalent set', () => {
			const result = sort(setA);
			expect(equivalence(result, setA)).toBe(true);
		});
	}

	it('sorting a sorted set will result in the same ordering', () => {
		const ordered = Array.from(setA);
		const result = sort(setA, defaultComparator);
		expectSortedElements(result, ordered);
	});

	it('sorting a reversed set will result in the reversed ordering', () => {
		const ordered = Array.from(setA).sort(reverseComparator);
		const result = sort(setA, reverseComparator);
		expectSortedElements(result, ordered);
	});

	if (typeof a === 'number' || typeof a === 'string') {
		it('sorting an unordered set will order it', () => {
			const ordered = Array.from(universal);
			const result = sort(unordered);
			expectSortedElements(result, ordered);
		});
	}

	it('sorting an unordered set with default comparator will default order it', () => {
		const ordered = Array.from(universal);
		const result = sort(unordered, defaultComparator);
		expectSortedElements(result, ordered);
	});

	it('sorting an unordered set with reverse comparator will reverse order it', () => {
		const ordered = Array.from(universal).sort(reverseComparator);
		const result = sort(unordered, reverseComparator);
		expectSortedElements(result, ordered);
	});
}

/**
 * Iterates through elements in the result set,
 * and expects them to equal the respectively indexed
 * element in the provided expectedOrder array.
 */
function expectSortedElements<T>(result: ReadonlySet<T>, expectedOrder: Array<T>): void {
	let index = 0;
	result.forEach(element => {
		expect(element).toBe(expectedOrder[index++]);
	});
}
