export function disjoint<T>(...sets: Set<T>[]): boolean;
export function disjoint<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * Sets are disjoint if they share no elements in common.
 * Set disjoint is also commonly referred to as mutually exclusive, or independent.
 *
 * Set disjoint does not have a common notation.
 * However, the disjoint union of sets is notated as A ⊔ B.
 *
 * @description A disjoint B ⇔ A ∩ B = ∅
 */
export function disjoint<T, S extends ReadonlySet<T>>(...sets: S[]): boolean {
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
