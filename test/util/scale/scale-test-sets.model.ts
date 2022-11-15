import { Timer } from './timer.model';

/**
 * Scale Testing Sets:
 *
 * The vertical scale: single sets
 * each contain all the multiples of a given number,
 * from `0` up to `15 Million`.
 *
 * The vertical scale: multiple sets
 * are each an Array of Sets, which contain a
 * total of `10 Million` elements between all the Sets.
 *
 * The horizontal scale sets
 * are each an Array of Sets, which contain a
 * total of `100` elements between all the sets.
 *
 * Note: Sets of `size > 16,777,216` will fail to instantiate,
 * or will fail to add elements afterwards, with the following error message:
 * ```
 * RangeError: Value undefined out of range for undefined options property undefined
 * ```
 */
export abstract class ScaleTestSets {
	private static copiedMultiples = 0;
	private static copiedMany = 0;

	/* multiples of 1, contains (1 - 15M) */
	public static readonly multiplesOf1 = ScaleTestSets.multiplesOf(1, 15_000_000);
	/* multiples of 2, contains (2 - 15M) */
	public static readonly multiplesOf2 = ScaleTestSets.multiplesOf(2, 7_500_000);
	/* multiples of 3, contains (3 - 15M) */
	public static readonly multiplesOf3 = ScaleTestSets.multiplesOf(3, 5_000_000);

	/* multiples of 2, part B, contains (15M+2 - 30M) */
	public static readonly multiplesOf2B = ScaleTestSets.multiplesOf(2, 7_500_000, 15_000_000);
	/* multiples of 3, part B, contains (15M+3 - 30M) */
	public static readonly multiplesOf3B = ScaleTestSets.multiplesOf(3, 5_000_000, 15_000_000);
	/* multiples of 3, part C, contains (30M+3 - 45M) */
	public static readonly multiplesOf3C = ScaleTestSets.multiplesOf(3, 5_000_000, 30_000_000);

	/* 100 equivalent sets of 100k elements */
	public static readonly someEquivalent = ScaleTestSets.manyOf(100, 100_000);
	/* 10k equivalent sets of 1k elements */
	public static readonly manyEquivalent = ScaleTestSets.manyOf(10_000, 1_000);
	/* 100 disjoint sets of 100k elements */
	public static readonly someDisjoint = ScaleTestSets.manyOf(100, 100_000, true);
	/* 10k disjoint sets of 1k elements */
	public static readonly manyDisjoint = ScaleTestSets.manyOf(10_000, 1_000, true);

	/* 2 equivalent sets of 50 elements */
	public static readonly coupleEquivalent = ScaleTestSets.manyOf(2, 50);
	/* 5 equivalent sets of 20 elements */
	public static readonly fewEquivalent = ScaleTestSets.manyOf(5, 20);
	/* 2 disjoint sets of 50 elements */
	public static readonly coupleDisjoint = ScaleTestSets.manyOf(2, 50, true);
	/* 5 disjoint sets of 20 elements */
	public static readonly fewDisjoint = ScaleTestSets.manyOf(5, 20, true);

	/* unordered set of 100 elements, contains: 0 - 99 */
	public static readonly manyUnordered = new Set<number>([
		98, 49, 85, 53, 83, 57, 86, 94, 82, 47,
		21, 45, 29, 15, 66, 64, 76, 84, 9, 73,
		26, 80, 32, 91, 65, 38, 14, 24, 13, 78,
		10, 37, 92, 95, 18, 69, 6, 25, 3, 87,
		51, 48, 71, 81, 77, 27, 41, 79, 97, 33,
		60, 89, 55, 36, 63, 50, 93, 30, 4, 62,
		8, 31, 17, 88, 40, 39, 46, 52, 56, 42,
		72, 28, 44, 59, 43, 99, 68, 35, 2, 90,
		96, 19, 54, 70, 7, 61, 75, 23, 22, 5,
		11, 34, 16, 67, 0, 20, 12, 74, 1, 58,
	]);

	private static multiplesOf(factor: number, size: number, offset = 0): ReadonlySet<number> {
		ScaleTestSets.incrementMultiplesCopied();
		return Timer.time('copying sets', () =>
			new Set<number>(Array.from(
				{ length: size },
				(_, index) => (index * factor) + offset),
			));
	}

	private static manyOf(quantity: number, size: number, offset = false): ReadonlyArray<ReadonlySet<number>> {
		ScaleTestSets.incrementManyCopied();
		return Timer.time('copying sets', () =>
			Array.from(
				{ length: quantity },
				(_1, setIndex) => new Set<number>(Array.from(
					{ length: size },
					(_2, index) => index + (offset ? (setIndex * size) : 0),
				)),
			));
	}

	private static incrementMultiplesCopied(): void {
		if (ScaleTestSets.copiedMultiples++ === 3) {
			Timer.nextLine('copying sets');
		}
	}

	private static incrementManyCopied(): void {
		if (ScaleTestSets.copiedMultiples++ === 6) {
			Timer.nextLine('copying sets');
		}

		if (ScaleTestSets.copiedMany++ === 4) {
			Timer.nextLine('copying sets');
		}
	}
}

Timer.logAll();
