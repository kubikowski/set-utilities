export function intersection<T>(...sets: Set<T>[]): Set<T>;
export function intersection<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The intersection of two sets contains all the elements each contained in both of the sets.
 *
 * Set intersection is notated A ∩ B.
 *
 * @description A ∩ B ≔ { x : (x ∈ A) ∧ (x ∈ B) }
 */
export function intersection<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	let result = new Set<T>(sets[0] ?? new Set<T>());

	for (let index = 1; index < sets.length; index++) {
		const _intersection = new Set<T>();

		sets[index]?.forEach(value => {
			if (result.has(value)) {
				_intersection.add(value);
			}
		});

		result = _intersection;
	}

	return result as ReadonlySet<T> as S;
}
