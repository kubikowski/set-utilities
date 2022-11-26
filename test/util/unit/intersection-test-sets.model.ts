import { TestSets } from '../test-sets/test-sets.model';

export class IntersectionTestSets<T> {

	/* the intersection of AB, contains: a, b */
	public readonly intersectionAB: ReadonlySet<T>;
	/* the intersection of ABC, contains: a */
	public readonly intersectionABC: ReadonlySet<T>;

	public constructor(testSets: TestSets<T>) {
		const { a, b } = testSets;

		this.intersectionAB = new Set<T>([ a, b ]);
		this.intersectionABC = new Set<T>([ a ]);
	}
}
