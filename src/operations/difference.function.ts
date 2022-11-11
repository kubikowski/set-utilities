export function difference<T>(...sets: Set<T>[]): Set<T>;
export function difference<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The difference of two sets contains all the elements of the first set
 * that are not contained in the second (or thereafter).
 *
 * Set difference is notated A ∖ B,
 * or more commonly as A - B.
 *
 * @description A ∖ B ≔ { x : (x ∈ A) ∧ (x ∉ B) }
 */
export function difference<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	if (sets.length < 2) {
		return new Set<T>(sets.shift()) as ReadonlySet<T> as S;
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

	return resultSet as ReadonlySet<T> as S;
}
