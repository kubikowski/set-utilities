export function equivalence<T>(...sets: Set<T>[]): boolean;
export function equivalence<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * Sets are equivalent if they have the same cardinality,
 * and there is a bijection between the values contained in each set.
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
	const primaryCardinality = cardinalities[0] ?? 0;
	const allSetsHaveEqualCardinalities = cardinalities
		.every(cardinality => cardinality === primaryCardinality);

	if (!allSetsHaveEqualCardinalities) {
		return false;
	}

	for (const value of sets[0] ?? new Set<T>()) {
		for (let index = 1; index < sets.length; index++) {
			if (!sets[index]?.has(value)) {
				return false;
			}
		}
	}

	return true;
}
