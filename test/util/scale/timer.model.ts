import { performance } from 'perf_hooks';
import { AnsiFormat } from './ansi-format.model';

export abstract class Timer {
	private static readonly timings = new Map<string, number[][]>();

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
			Timer.timings.set(methodName, [[]]);
		}

		Timer.timings.get(methodName)?.slice(-1)[0]?.push(timing);
	}

	public static nextLine(methodName: string): void {
		Timer.timings.get(methodName)?.push([]);
	}

	public static log(methodName: string): void {
		const logs = Timer.getLogs(methodName);

		process.stdout.write(`${ logs }\n`);
	}

	public static logAll(): void {
		const logs = Array.from(Timer.timings.keys())
			.map(Timer.getLogs)
			.join('');

		process.stdout.write(`\n${ logs }\n`);
	}

	private static getLogs(methodName: string): string {
		const timings = Timer.timings.get(methodName);

		if (typeof timings !== 'undefined') {
			const totalTiming = Timer.totalTiming(timings);
			const allTimings = Timer.allTimings(timings);

			return `${ methodName }: ${ totalTiming }\n${ allTimings }`;
		} else {
			return `${ methodName }: none\n`;
		}
	}

	private static totalTiming(timings: number[][]): string {
		const totalTiming = timings.flat()
			.reduce((total, current) => total + current, 0);

		return Timer.formatTotalTiming(totalTiming);
	}

	private static allTimings(timings: number[][]): string {
		return timings.map(singleTimings => {
			const formattedTimings = singleTimings
				.map(Timer.formatSingleTiming);

			return ` → ( ${ formattedTimings.join(', ') } )\n`;
		}).join('');
	}

	private static formatTotalTiming(totalTiming: number): string {
		const formattedTiming = Timer.formatTiming(totalTiming);

		if (totalTiming < 1_000) {
			return AnsiFormat.fgMagenta(formattedTiming);
		} else if (totalTiming < 5_000) {
			return AnsiFormat.fgBlue(formattedTiming);
		} else if (totalTiming < 20_000) {
			return AnsiFormat.fgGreen(formattedTiming);
		} else if (totalTiming < 60_000) {
			return AnsiFormat.fgYellow(formattedTiming);
		} else {
			return AnsiFormat.fgRed(formattedTiming);
		}
	}

	private static formatSingleTiming(timing: number): string {
		const formattedTiming = Timer.formatTiming(timing);

		if (timing < 10) {
			return AnsiFormat.fgMagenta(formattedTiming);
		} else if (timing < 200) {
			return AnsiFormat.fgBlue(formattedTiming);
		} else if (timing < 1_000) {
			return AnsiFormat.fgGreen(formattedTiming);
		} else if (timing < 5_000) {
			return AnsiFormat.fgYellow(formattedTiming);
		} else if (timing < 10_000) {
			return AnsiFormat.fgRed(formattedTiming);
		} else {
			return AnsiFormat.fgWhite(formattedTiming);
		}
	}

	private static formatTiming(timing: number): string {
		const options: Intl.NumberFormatOptions = {
			minimumFractionDigits: 3,
			maximumFractionDigits: 3,
		};

		return timing.toLocaleString(undefined, options) + 'ms';
	}
}
