export function union<T>(...sets: Set<T>[]): Set<T>;
export function union<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The union of sets contains all the elements
 * each contained in any set.
 *
 * Set union is notated A ∪ B.
 *
 * @description A ∪ B ≔ { x : (x ∈ A) ∨ (x ∈ B) }
 */
export function union<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	const resultSet = new Set<T>(sets.shift());

	for (const set of sets) {
		for (const element of set) {
			resultSet.add(element);
		}
	}

	return resultSet as ReadonlySet<T> as S;
}
