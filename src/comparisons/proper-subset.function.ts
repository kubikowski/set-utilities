export function properSubset<T>(...sets: Set<T>[]): boolean;
export function properSubset<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A set is a proper subset of another if all of its elements
 * are elements of the other set (and thereafter), and it has a
 * greater cardinality than the other set (and thereafter).
 *
 * Proper subset is notated A ⊂ B,
 * and not proper subset is A ⊄ B.
 *
 * @description A ⊂ B ⇔ (|A| < |B|) ∧ (∀x : (x ∈ A ⇒ x ∈ B))
 */
export function properSubset<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
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
