export function subset<T>(...sets: Set<T>[]): boolean;
export function subset<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A set is a subset of another if all of its elements
 * are elements of the other set (and thereafter).
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
	const allSetsHaveGreaterCardinalities = cardinalities
		.every(cardinality => cardinality >= primaryCardinality);

	if (!allSetsHaveGreaterCardinalities) {
		return false;
	}

	const primarySet = sets.shift()!;
	for (const element of primarySet) {
		for (let index = 0; index < sets.length; ++index) {
			if (!sets[index]!.has(element)) {
				return false;
			}
		}
	}

	return true;
}
