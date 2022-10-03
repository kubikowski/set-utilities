import { performance } from 'perf_hooks';

/**
 * Scale Testing:
 *
 * Each set listed below contains all the multiples of a given number
 * from `0` up to `10 Million`.
 *
 * Note: Sets with `100 Million` values will fail to instantiate.
 */
export namespace multiples {
	export function of1(): ReadonlySet<number> {
		return of(1, 10_000_000);
	}

	export function of2(): ReadonlySet<number> {
		return of(2, 5_000_000);
	}

	export function of3(): ReadonlySet<number> {
		return of(3, 3_333_333);
	}

	function of(factor: number, size: number): ReadonlySet<number> {
		return new Set<number>(Array.from(
			{ length: size },
			(_, index) => index * factor),
		);
	}
}

export function time<T>(methodName: string, method: () => T): T {
	const timeStart = performance.now();
	const result: T = method();
	const timeEnd = performance.now();

	console.log(`${ methodName } took ${ (timeEnd - timeStart).toFixed(3) } ms`);
	return result;
}
