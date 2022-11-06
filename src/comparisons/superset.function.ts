export function superset<T>(...sets: Set<T>[]): boolean;
export function superset<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A set is a superset of another if it contains all the elements
 * contained in the other set (and thereafter).
 *
 * Superset is notated A ⊇ B,
 * where not superset is A ⊉ B.
 *
 * @description A ⊇ B ⇔ ∀x : (x ∈ B ⇒ x ∈ A)
 */
export function superset<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
	if (sets.length < 2) {
		return true;
	}

	const cardinalities = sets.map(set => set.size);
	const primaryCardinality = cardinalities.shift()!;
	if (!cardinalities.every(cardinality => cardinality <= primaryCardinality)) {
		return false;
	}

	const primarySet = sets.shift()!;
	for (const set of sets) {
		for (const element of set) {
			if (!primarySet.has(element)) {
				return false;
			}
		}
	}

	return true;
}
