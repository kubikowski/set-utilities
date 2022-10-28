export function xor<T>(...sets: Set<T>[]): Set<T>;
export function xor<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The symmetric difference of two sets contains only the unique elements of each set.
 *
 * Note: the symmetric difference of 2 sets is trivially inferred from an element-wise xor.
 *
 * Set symmetric difference is notated A ⊖ B or A ∆ B.
 *
 * @description A ∆ B ≔ { x : (x ∈ A) ⊕ (x ∈ B) }
 */
export function xor<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	const resultSet = new Set<T>(sets.shift());
	const reusedElements = new Set<T>();

	for (const set of sets) {
		for (const element of set) {
			if (resultSet.has(element)) {
				resultSet.delete(element);
				reusedElements.add(element);
			} else if (!reusedElements.has(element)) {
				resultSet.add(element);
			}
		}
	}

	return resultSet as ReadonlySet<T> as S;
}
