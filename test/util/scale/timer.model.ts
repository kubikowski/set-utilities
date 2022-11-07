import { performance } from 'perf_hooks';

export abstract class Timer {
	private static readonly timings = new Map<string, number[]>();

	public static time<T>(methodName: string, method: () => T): T {
		const timeStart = performance.now();
		const result: T = method();
		const timeEnd = performance.now();

		Timer.add(methodName, timeEnd - timeStart);
		return result;
	}

	public static manyTimes<T>(methodName: string, method: () => T, times: number): void {
		const timeStart = performance.now();
		for (let i = 0; i < times; ++i) method();
		const timeEnd = performance.now();

		Timer.add(methodName, timeEnd - timeStart);
	}

	private static add(methodName: string, timing: number): void {
		if (!Timer.timings.has(methodName)) {
			Timer.timings.set(methodName, []);
		}

		Timer.timings.get(methodName)?.push(timing);
	}

	public static log(methodName: string): void {
		const logs = Timer.getLogs(methodName);

		process.stdout.write(logs);
	}

	public static logAll(): void {
		const logs = Array.from(Timer.timings.keys())
			.map(Timer.getLogs)
			.join('');

		process.stdout.write(logs);
	}

	private static getLogs(methodName: string): string {
		const timings = Timer.timings.get(methodName);

		if (typeof timings !== 'undefined') {
			const totalTiming = timings
				.reduce((total, current) => total + current, 0)
				.toFixed(3) + 'ms';
			const formattedTimings = timings
				.map(timing => timing.toFixed(3) + 'ms')
				.join(', ');

			return `${ methodName }: ${ totalTiming }\n → [ ${ formattedTimings } ]\n`;
		} else {
			return `${ methodName }: none\n`;
		}
	}
}
