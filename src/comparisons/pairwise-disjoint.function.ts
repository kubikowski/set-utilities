export function pairwiseDisjoint<T>(...sets: Set<T>[]): boolean;
export function pairwiseDisjoint<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A Family of Sets are pairwise disjoint
 * if none of the Sets share any elements in common.
 *
 * Set pairwise disjoint does not have a common notation.
 * However, the disjoint union of sets is notated as A ⊔ B.
 *
 * @description pairwise disjoint F ⇔ (∀A,B ∈ F) ⇒ (A ∩ B = ∅)
 */
export function pairwiseDisjoint<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
	if (sets.length < 2) {
		return true;
	}

	const allElements = new Set<T>(sets.shift());
	for (const set of sets) {
		for (const element of set) {
			if (allElements.has(element)) {
				return false;
			} else {
				allElements.add(element);
			}
		}
	}

	return true;
}
