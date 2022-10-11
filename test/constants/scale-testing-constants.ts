import { performance } from 'perf_hooks';

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
	public static of1(): ReadonlySet<number> {
		return Multiples.of(1, 15_000_000);
	}

	public static of2(): ReadonlySet<number> {
		return Multiples.of(2, 7_500_000);
	}

	public static of3(): ReadonlySet<number> {
		return Multiples.of(3, 5_000_000);
	}

	private static of(factor: number, size: number): ReadonlySet<number> {
		return new Set<number>(Array.from(
			{ length: size },
			(_, index) => index * factor),
		);
	}
}

export abstract class Timer {
	private static readonly timings = new Map<string, number[]>();

	public static time<T>(methodName: string, method: () => T): T {
		const timeStart = performance.now();
		const result: T = method();
		const timeEnd = performance.now();

		Timer.add(methodName, timeEnd - timeStart);
		return result;
	}

	private static add(methodName: string, timing: number): void {
		if (!this.timings.has(methodName)) {
			this.timings.set(methodName, []);
		}

		this.timings.get(methodName)?.push(timing);
	}

	public static log(methodName: string): void {
		const timings = this.timings.get(methodName);

		if (typeof timings !== 'undefined') {
			const formattedTimings = timings
				.map(timing => `${ timing.toFixed(3) }ms`)
				.join(', ');
			console.log(`${ methodName }: [ ${ formattedTimings } ]`);
		}
	}
}
