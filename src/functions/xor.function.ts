import { difference } from './difference.function';
import { union } from './union.function';

export function xor<T>(...sets: Set<T>[]): Set<T>;
export function xor<T>(...sets: ReadonlySet<T>[]): ReadonlySet<T>;

/**
 * The symmetric difference of two sets contains only the unique elements of each set.
 * Set symmetric difference is notated A ⊖ B or A △ B.
 *
 * Note: the symmetric difference of 2 sets is trivially inferred from an element-wise xor.
 *
 * @description A ⊖ B := { x : x ∈ A ⊕ x ∈ B }
 */
export function xor<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	const differences: S[] = [];

	sets.forEach((set, index) => {
		const otherSets = [ ...sets.slice(0, index), ...sets.slice(index + 1) ];

		differences.push(difference(set, ...otherSets) as S);
	});

	return union(...differences) as S;
}
