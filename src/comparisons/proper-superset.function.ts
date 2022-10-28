export function properSuperset<T>(...sets: Set<T>[]): boolean;
export function properSuperset<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A set is a proper subset of another if all of its elements
 * are elements of the other set (and thereafter), and it has a
 * greater cardinality than the other set (and thereafter).
 *
 * Proper superset is notated A ⊃ B,
 * and not proper superset is A ⊅ B.
 *
 * @description A ⊃ B ⇔ (|A| > |B|) ∧ (∀x : (x ∈ B ⇒ x ∈ A))
 */
export function properSuperset<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
	if (sets.length < 2) {
		return true;
	}

	const cardinalities = sets.map(set => set.size);
	const primaryCardinality = cardinalities.shift()!;
	const allSetsHaveLesserCardinalities = cardinalities
		.every(cardinality => cardinality < primaryCardinality);

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
