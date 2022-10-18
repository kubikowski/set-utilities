import { Timer } from './timer.model';

/**
 * Scale Testing Sets:
 *
 * Each set listed below contains all the multiples
 * of a given number, from `0` up to `15 Million`.
 *
 * Note: Sets of `size > 16,777,216` will fail to instantiate,
 * or will fail to add values afterwards, with the following error message:
 * ```
 * RangeError: Value undefined out of range for undefined options property undefined
 * ```
 */
export abstract class Multiples {
	private static _of1?: ReadonlySet<number>;
	private static _of2?: ReadonlySet<number>;
	private static _of3?: ReadonlySet<number>;
	private static _someEquivalent?: ReadonlyArray<ReadonlySet<number>>;
	private static _manyEquivalent?: ReadonlyArray<ReadonlySet<number>>;
	private static _someDisjoint?: ReadonlyArray<ReadonlySet<number>>;
	private static _manyDisjoint?: ReadonlyArray<ReadonlySet<number>>;

	public static get of1(): ReadonlySet<number> {
		if (typeof this._of1 === 'undefined') this._of1 = Multiples.of(1, 15_000_000);
		return this._of1;
	}

	public static get of2(): ReadonlySet<number> {
		if (typeof this._of2 === 'undefined') this._of2 = Multiples.of(2, 7_500_000);
		return this._of2;
	}

	public static get of3(): ReadonlySet<number> {
		if (typeof this._of3 === 'undefined') this._of3 = Multiples.of(3, 5_000_000);
		return this._of3;
	}

	public static get someEquivalent(): ReadonlyArray<ReadonlySet<number>> {
		if (typeof this._someEquivalent === 'undefined') this._someEquivalent = Multiples.manyOf(100, 100_000);
		return this._someEquivalent;
	}

	public static get manyEquivalent(): ReadonlyArray<ReadonlySet<number>> {
		if (typeof this._manyEquivalent === 'undefined') this._manyEquivalent = Multiples.manyOf(10_000, 1_000);
		return this._manyEquivalent;
	}

	public static get someDisjoint(): ReadonlyArray<ReadonlySet<number>> {
		if (typeof this._someDisjoint === 'undefined') this._someDisjoint = Multiples.manyOf(100, 100_000, true);
		return this._someDisjoint;
	}

	public static get manyDisjoint(): ReadonlyArray<ReadonlySet<number>> {
		if (typeof this._manyDisjoint === 'undefined') this._manyDisjoint = Multiples.manyOf(10_000, 1_000, true);
		return this._manyDisjoint;
	}

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
				(_, setIndex) => new Set<number>(Array.from(
					{ length: size },
					(__, index) => index + (offset ? (setIndex * size) : 0),
				)),
			));
	}
}
