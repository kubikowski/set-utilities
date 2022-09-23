export function equivalence<T>(...sets: Set<T>[]): boolean;
export function equivalence<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * Sets are equivalent if they have the same cardinality,
 * and there is a bijection between the values contained in each set.
 * Set equivalence is notated A ∼ B, where not equivalence is A ≁ B.
 *
 * @description A ∼ B = A ⊂ B ∧ B ⊂ A
 */
export function equivalence<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
	const setsHaveSameCardinalities = sets
		.map(set => set.size)
		.every((cardinality, _index, cardinalities) => cardinality === cardinalities[0]);

	if (!setsHaveSameCardinalities) {
		return false;
	}

	for (const value of sets[0] ?? new Set<T>()) {
		for (let i = 1; i < sets.length; i++) {
			if (!sets[i]?.has(value)) {
				return false;
			}
		}
	}

	return true;
}
