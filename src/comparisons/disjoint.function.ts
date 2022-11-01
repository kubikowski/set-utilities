export function disjoint<T>(...sets: Set<T>[]): boolean;
export function disjoint<T>(...sets: ReadonlySet<T>[]): boolean;

/**
 * A Set is disjoint from another (or thereafter)
 * if it shares no elements in common with the other set (or thereafter).
 *
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

	const primarySet = sets.shift()!;
	for (const set of sets) {
		for (const element of set) {
			if (primarySet.has(element)) {
				return false;
			}
		}
	}

	return true;
}
