import { TestSets } from '../test-sets/test-sets.model';

export class DifferenceTestSets<T> {

	/* the difference of AB, contains: c, e */
	public readonly differenceAB: ReadonlySet<T>;
	/* the difference of ABC, contains: e */
	public readonly differenceABC: ReadonlySet<T>;
	/* the difference of UA, contains: d, f, g, h, i, j */
	public readonly differenceUA: ReadonlySet<T>;

	public constructor(testSets: TestSets<T>) {
		const { c, d, e, f, g, h, i, j } = testSets;

		this.differenceAB = new Set<T>([ c, e ]);
		this.differenceABC = new Set<T>([ e ]);
		this.differenceUA = new Set<T>([ d, f, g, h, i, j ]);
	}
}
