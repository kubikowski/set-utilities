export function superset<T>(...sets: Set<T>[]): boolean;
export function superset<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A set is a superset of another if it contains all the elements
 * contained in the other set (and thereafter).
 *
 * Superset is notated A ⊇ B,
 * where not superset is A ⊉ B.
 * Proper superset is notated A ⊃ B,
 * and not proper superset is A ⊅ B.
 *
 * @description A ⊇ B ⇔ ∀x : (x ∈ B ⇒ x ∈ A)
 */
export function superset<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
	if (sets.length < 2) {
		return true;
	}

	const cardinalities = sets.map(set => set.size);
	const primaryCardinality = cardinalities.shift()!;
	const allSetsHaveLesserCardinalities = cardinalities
		.every(cardinality => cardinality <= primaryCardinality);

	if (!allSetsHaveLesserCardinalities) {
		return false;
	}

	for (let index = 1; index < sets.length; index++) {
		for (const element of sets[index]!) {
			if (!sets[0]?.has(element)) {
				return false;
			}
		}
	}

	return true;
}
