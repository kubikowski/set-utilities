export function union<T>(...sets: Set<T>[]): Set<T>;
export function union<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The union of two sets contains all the elements contained in either set (or both sets).
 *
 * Set union is notated A ∪ B.
 *
 * @description A ∪ B ≔ { x : (x ∈ A) ∨ (x ∈ B) }
 */
export function union<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	const result = new Set<T>([ ...sets[0] ?? new Set<T>() ]);

	for (let index = 1; index < sets.length; index++) {
		sets[index]?.forEach(value => {
			result.add(value);
		});
	}

	return result as ReadonlySet<T> as S;
}
