export function properSuperset<T>(...sets: Set<T>[]): boolean;
export function properSuperset<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A set is a proper superset of another if it contains
 * all the elements contained in the other set,
 * and it has a greater cardinality than the other set.
 *
 * Proper superset is notated A ⊃ B,
 * and not proper superset is A ⊅ B.
 *
 * @description A ⊃ B ⇔ (|A| > |B|) ∧ (∀x : (x ∈ B ⇒ x ∈ A))
 */
export function properSuperset<T>(...sets: ReadonlySet<T>[]): boolean {
	if (sets.length < 2) {
		return true;
	}

	const cardinalities = sets.map(set => set.size);
	const primaryCardinality = cardinalities.shift()!;
	if (!cardinalities.every(cardinality => cardinality < primaryCardinality)) {
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
