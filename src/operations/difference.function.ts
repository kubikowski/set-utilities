export function difference<T>(...sets: Set<T>[]): Set<T>;
export function difference<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The difference of sets contains all the elements
 * of the first set, not contained in other sets.
 *
 * Set difference is notated A ∖ B,
 * or more commonly as A - B.
 *
 * @description A ∖ B ≔ { x : (x ∈ A) ∧ (x ∉ B) }
 */
export function difference<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T> {
	if (sets.length < 2) {
		return new Set<T>(sets.shift());
	}

	const resultSet = new Set<T>();
	const primarySet = sets.shift()!;
	const secondarySet = sets.shift()!;

	for (const element of primarySet) {
		if (!secondarySet.has(element)) {
			resultSet.add(element);
		}
	}

	for (const set of sets) {
		for (const element of set) {
			resultSet.delete(element);
		}
	}

	return resultSet;
}
