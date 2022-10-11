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

	const allValues = new Set<T>(sets[0]);
	for (let index = 1; index < sets.length; index++) {
		for (const value of sets[index]!) {
			if (allValues.has(value)) {
				return false;
			} else {
				allValues.add(value);
			}
		}
	}

	return true;
}
