export function sort<T>(set: Set<T>, compareFunction?: (a: T, b: T) => number): Set<T>;
export function sort<T>(set: ReadonlySet<T>, compareFunction?: (a: T, b: T) => number): ReadonlySet<T>;

/**
 * Unlike JavaScript's native Array sort, this implementation
 * of Set sort does not modify the original Set.
 *
 * Instead, it returns a new sorted Set
 * with the same values contained in the original.
 */
export function sort<T, S extends ReadonlySet<T>>(set: S, compareFunction?: (a: T, b: T) => number): S {
	return new Set<T>(Array.from(set).sort(compareFunction)) as ReadonlySet<T> as S;
}
