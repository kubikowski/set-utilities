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
	const allSetsHaveGreaterCardinalities = cardinalities
		.every(cardinality => cardinality > primaryCardinality);

	if (!allSetsHaveGreaterCardinalities) {
		return false;
	}

	for (const value of sets[0]!) {
		for (let index = 1; index < sets.length; index++) {
			if (!sets[index]?.has(value)) {
				return false;
			}
		}
	}

	return true;
}
