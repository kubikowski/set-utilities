export function sort<T>(set: Set<T>, compareFunction?: (a: T, b: T) => number): Set<T>;
export function sort<T>(set: ReadonlySet<T>, compareFunction?: (a: T, b: T) => number): ReadonlySet<T>;

/**
 * Unlike JavaScript's native array sort, this set sort
 * does not modify the ordering of the original set.
 *
 * Instead, it returns a new sorted set with
 * the same elements contained in the original.
 *
 * Sort is often notated A ⇅,
 * or specifically as A ↑ or A ↓ depending on whether
 * the sort order is ascending or descending respectively.
 */
export function sort<T>(set: ReadonlySet<T>, compareFunction?: (a: T, b: T) => number): ReadonlySet<T> {
	return new Set<T>(Array.from(set).sort(compareFunction));
}
