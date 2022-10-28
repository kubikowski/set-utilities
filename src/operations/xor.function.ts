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
	const result = new Set<T>(sets[0]);
	const reusedElements = new Set<T>();

	for (let index = 1; index < sets.length; index++) {
		for (const element of sets[index]!) {
			if (result.has(element)) {
				result.delete(element);
				reusedElements.add(element);
			} else if (!reusedElements.has(element)) {
				result.add(element);
			}
		}
	}

	return result as ReadonlySet<T> as S;
}
