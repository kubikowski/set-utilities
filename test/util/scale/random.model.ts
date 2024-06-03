/**
 * Seeded implementation of the Linear Congruential Generator [LCG]
 * https://en.wikipedia.org/wiki/Linear_congruential_generator
 *
 * This allows the scale tests to generate pseudorandom datasets,
 * while maintaining seeding - there is no variance in the tested
 * data between individual test runs.
 */
export abstract class Random {

	// LCG using GCC's constants
	private static readonly m = BigInt(0x80000000); // 2**31;
	private static readonly a = BigInt(1103515245);
	private static readonly c = BigInt(12345);

	// initial state is the random seed
	private static state = BigInt(21);

	// next 32-bit integer
	public static int(): number {
		this.state = (this.a * this.state + this.c) % this.m;
		return Number(this.state);
	}

	// next float from [0,1]
	public static float(): number {
		return this.int() / (Number(this.m) - 1);
	}

	// uniform distribution
	public static uniform(min: number, max: number): number {
		return Math.floor(this.float() * (max - min) + min);
	}

	// Box-Muller normal distribution
	public static normal(min: number, max: number, skew = 1): number {
		const u = this.float();
		const v = this.float();

		const r = Math.sqrt(-2.0 * Math.log(u));
		const theta = 2.0 * Math.PI * v;
		const percentile = (r * Math.cos(theta)) / 10.0 + 0.5;

		if (percentile < 0 || percentile > 1) {
			return this.normal(min, max);
		}

		const skewed = (skew !== 1)
			? Math.pow(percentile, skew)
			: percentile;

		return Math.floor(skewed * (max - min) + min);
	}
}
