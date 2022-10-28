export function equivalence<T>(...sets: Set<T>[]): boolean;
export function equivalence<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * Sets are equivalent if they have the same cardinality,
 * and there is a bijection between the elements contained in each set.
 * Set equivalence is also commonly referred to as equals.
 *
 * Set equivalence is notated A ∼ B,
 * where not equivalence is A ≁ B.
 *
 * @description A ∼ B ⇔ (A ⊆ B) ∧ (B ⊆ A)
 */
export function equivalence<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
	if (sets.length < 2) {
		return true;
	}

	const cardinalities = sets.map(set => set.size);
	const primaryCardinality = cardinalities.shift()!;
	const allSetsHaveEqualCardinalities = cardinalities
		.every(cardinality => cardinality === primaryCardinality);

	if (!allSetsHaveEqualCardinalities) {
		return false;
	}

	const primarySet = sets.shift()!;
	for (const element of primarySet) {
		for (const set of sets) {
			if (!set.has(element)) {
				return false;
			}
		}
	}

	return true;
}
