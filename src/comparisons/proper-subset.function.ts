export function properSubset<T>(...sets: Set<T>[]): boolean;
export function properSubset<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A set is a proper subset of another if all of its elements
 * are contained in the other set,
 * and it has a lower cardinality than the other set.
 *
 * Proper subset is notated A ⊂ B,
 * and not proper subset is A ⊄ B.
 *
 * @description A ⊂ B ⇔ (|A| < |B|) ∧ (∀x : (x ∈ A ⇒ x ∈ B))
 */
export function properSubset<T>(...sets: ReadonlySet<T>[]): boolean {
	if (sets.length < 2) {
		return true;
	}

	const cardinalities = sets.map(set => set.size);
	const primaryCardinality = cardinalities.shift()!;
	if (!cardinalities.every(cardinality => cardinality > primaryCardinality)) {
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
