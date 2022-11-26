import { TestSets } from '../test-sets/test-sets.model';

export class UnionTestSets<T> {

	/* the union of ABC, contains: a, b, c, d, e, f */
	public readonly unionAB: ReadonlySet<T>;
	/* the union of ABC, contains: a, b, c, d, e, f, g */
	public readonly unionABC: ReadonlySet<T>;
	/* the union of DE, contains: h, i */
	public readonly unionDE: ReadonlySet<T>;
	/* the union of DEF, contains: h, i, j */
	public readonly unionDEF: ReadonlySet<T>;
	/* the union of AD, contains: a, b, c, e, h */
	public readonly unionAD: ReadonlySet<T>;

	public constructor(testSets: TestSets<T>) {
		const { a, b, c, d, e, f, g, h, i, j } = testSets;

		this.unionAB = new Set<T>([ a, b, c, d, e, f ]);
		this.unionABC = new Set<T>([ a, b, c, d, e, f, g ]);
		this.unionDE = new Set<T>([ h, i ]);
		this.unionDEF = new Set<T>([ h, i, j ]);
		this.unionAD = new Set<T>([ a, b, c, e, h ]);
	}
}
