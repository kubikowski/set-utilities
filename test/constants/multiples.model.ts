import { Timer } from './timer.model';

/**
 * Scale Testing Sets:
 *
 * The vertical scale: single sets
 * each contain all the multiples of a given number,
 * from `0` up to `15 Million`.
 *
 * The vertical scale: multiple sets
 * each create an Array of Sets, which contain a
 * total of `10 Million` elements between all the Sets.
 *
 * The horizontal scale
 * each create an Array of Sets, which contain a
 * total of `100` elements between all the sets.
 *
 * Note: Sets of `size > 16,777,216` will fail to instantiate,
 * or will fail to add values afterwards, with the following error message:
 * ```
 * RangeError: Value undefined out of range for undefined options property undefined
 * ```
 */
export abstract class Multiples {

	// region vertical scale: single sets
	public static get of1(): ReadonlySet<number> {
		return Multiples.of(1, 15_000_000);
	}

	public static get of2(): ReadonlySet<number> {
		return Multiples.of(2, 7_500_000);
	}

	public static get of3(): ReadonlySet<number> {
		return Multiples.of(3, 5_000_000);
	}
	// endregion vertical scale: single sets

	// region vertical scale: multiple sets
	public static get someEquivalent(): ReadonlyArray<ReadonlySet<number>> {
		return Multiples.manyOf(100, 100_000);
	}

	public static get manyEquivalent(): ReadonlyArray<ReadonlySet<number>> {
		return Multiples.manyOf(10_000, 1_000);
	}

	public static get someDisjoint(): ReadonlyArray<ReadonlySet<number>> {
		return Multiples.manyOf(100, 100_000, true);
	}

	public static get manyDisjoint(): ReadonlyArray<ReadonlySet<number>> {
		return Multiples.manyOf(10_000, 1_000, true);
	}
	// endregion  vertical scale: multiple sets

	// region horizontal scale
	public static get coupleEquivalent(): ReadonlyArray<ReadonlySet<number>> {
		return Multiples.manyOf(2, 50);
	}

	public static get fewEquivalent(): ReadonlyArray<ReadonlySet<number>> {
		return Multiples.manyOf(5, 20);
	}

	public static get coupleDisjoint(): ReadonlyArray<ReadonlySet<number>> {
		return Multiples.manyOf(2, 50, true);
	}

	public static get fewDisjoint(): ReadonlyArray<ReadonlySet<number>> {
		return Multiples.manyOf(5, 20, true);
	}
	// endregion horizontal scale

	// region constructors
	private static of(factor: number, size: number, offset = 0): ReadonlySet<number> {
		return Timer.time('copying multiples', () =>
			new Set<number>(Array.from(
				{ length: size },
				(_, index) => (index * factor) + offset),
			));
	}

	private static manyOf(quantity: number, size: number, offset = false): ReadonlyArray<ReadonlySet<number>> {
		return Timer.time('copying many', () =>
			Array.from(
				{ length: quantity },
				(_1, setIndex) => new Set<number>(Array.from(
					{ length: size },
					(_2, index) => index + (offset ? (setIndex * size) : 0),
				)),
			));
	}
	// endregion constructors
}
