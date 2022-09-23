export function difference<T>(...sets: Set<T>[]): Set<T>;
export function difference<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The difference of two sets contains all the elements of the first set
 * that are not contained in the second (or thereafter).
 * Set difference is notated A ∖ B, or more commonly A - B.
 *
 * @description A - B := { x : x ∈ A ∧ x ∉ B }
 */
export function difference<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	const result = new Set<T>([ ...(sets[0] ?? new Set<T>()) ]);

	for (let i = 1; i < sets.length; i++) {
		sets[i]?.forEach(t => {
			result.delete(t);
		});
	}

	return result as ReadonlySet<T> as S;
}
