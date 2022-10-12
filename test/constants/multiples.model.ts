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

	private static of(factor: number, size: number): ReadonlySet<number> {
		return Timer.time('copying multiples', () =>
			new Set<number>(Array.from(
				{ length: size },
				(_, index) => index * factor),
			));
	}
}
