import { difference } from './difference.function';
import { union } from './union.function';

/**
 * The symmetric difference of two sets contains only the unique elements to each set.
 * Set symmetric difference is notated A ∗ B.
 *
 * Note: the symmetric difference of 2 sets is trivially inferred from an element-wise xor.
 *
 * @description A ∗ B := { x : x ∈ A ⊕ x ∈ B }
 */
export function xor<T, S extends ReadonlySet<T>>(...sets: S[]): S {
	const differences: S[] = [];

	sets.forEach((set, index) => {
		const otherSets = [ ...sets.slice(0, index), ...sets.slice(index + 1) ];

		differences.push(difference(set, ...otherSets));
	});

	return union(...differences);
}
