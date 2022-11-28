export function intersection<T>(...sets: Set<T>[]): Set<T>;
export function intersection<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The intersection of sets contains all the elements
 * each contained in every set.
 *
 * Set intersection is notated A ∩ B.
 *
 * @description A ∩ B ≔ { x : (x ∈ A) ∧ (x ∈ B) }
 */
export function intersection<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	if (sets.length < 2) {
		return new Set<T>(sets.shift()) as ReadonlySet<T> as S;
	}

	const resultSet = new Set<T>();
	const primarySet = sets.shift()!;
	const secondarySet = sets.shift()!;

	for (const element of primarySet) {
		if (secondarySet.has(element)) {
			resultSet.add(element);
		}
	}

	for (const set of sets) {
		for (const element of resultSet) {
			if (!set.has(element)) {
				resultSet.delete(element);
			}
		}
	}

	return resultSet as ReadonlySet<T> as S;
}
