export function subset<T>(...sets: Set<T>[]): boolean;
export function subset<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A set is a subset of another if all of its elements
 * are contained in the other set.
 *
 * Subset is notated A ⊆ B,
 * where not subset is A ⊈ B.
 *
 * @description A ⊆ B ⇔ ∀x : (x ∈ A ⇒ x ∈ B)
 */
export function subset<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
	if (sets.length < 2) {
		return true;
	}

	const cardinalities = sets.map(set => set.size);
	const primaryCardinality = cardinalities.shift()!;
	if (!cardinalities.every(cardinality => cardinality >= primaryCardinality)) {
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
