export function copy<T>(set: Set<T>): Set<T>;
export function copy<T>(set: ReadonlySet<T>): ReadonlySet<T>;

/**
 * The copy of a set.
 *
 * @description A _copy_ ≔ { x : x ∈ A }
 */
export function copy<T>(set: ReadonlySet<T>): ReadonlySet<T> {
	const resultSet = new Set<T>();

	for (const element of set) {
		resultSet.add(element);
	}

	return resultSet;
}
