export function xor<T>(...sets: Set<T>[]): Set<T>;
export function xor<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The symmetric difference of sets contains
 * only the unique elements of each set.
 *
 * Note: the symmetric difference of 2 sets
 * is trivially inferred from an element-wise xor.
 *
 * Set symmetric difference is notated A ⊖ B or A ∆ B.
 *
 * @description A ∆ B ≔ { x : (x ∈ A) ⊕ (x ∈ B) }
 */
export function xor<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T> {
	if (sets.length < 2) {
		return new Set<T>(sets.shift());
	}

	const resultSet = new Set<T>();
	const duplicates = new Set<T>();
	const primarySet = sets.shift()!;
	const secondarySet = sets.shift()!;

	primaryLoop(primarySet, secondarySet);
	primaryLoop(secondarySet, primarySet);
	function primaryLoop(primary: ReadonlySet<T>, secondary: ReadonlySet<T>): void {
		if (sets.length !== 0) {
			for (const element of primary) {
				if (!secondary.has(element)) {
					resultSet.add(element);
				} else {
					duplicates.add(element);
				}
			}
		} else {
			for (const element of primary) {
				if (!secondary.has(element)) {
					resultSet.add(element);
				}
			}
		}
	}

	sets.forEach(tertiaryLoop);
	function tertiaryLoop(set: ReadonlySet<T>, index: number): void {
		if (index < sets.length - 1) {
			for (const element of set) {
				if (resultSet.has(element)) {
					resultSet.delete(element);
					duplicates.add(element);
				} else if (!duplicates.has(element)) {
					resultSet.add(element);
				}
			}
		} else {
			for (const element of set) {
				if (resultSet.has(element)) {
					resultSet.delete(element);
				} else if (!duplicates.has(element)) {
					resultSet.add(element);
				}
			}
		}
	}

	return resultSet;
}
