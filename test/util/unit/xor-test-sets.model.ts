import { TestSets } from '../test-sets/test-sets.model';

export class XorTestSets<T> {

	/* the xor of AB, contains: c, d, e, f */
	public readonly xorAB: ReadonlySet<T>;
	/* the xor of ABC, contains: e, f, g */
	public readonly xorABC: ReadonlySet<T>;
	/* the xor of DE, contains: h, i */
	public readonly xorDE: ReadonlySet<T>;
	/* the xor of DEF, contains: h, i, j */
	public readonly xorDEF: ReadonlySet<T>;
	/* the xor of AD, contains: a, b, c, e, h */
	public readonly xorAD: ReadonlySet<T>;
	/* the xor of ABCDEF, contains: e, f, g, h, i, j */
	public readonly xorABCDEF: ReadonlySet<T>;
	/* the xor of AU, contains: d, f, g, h, i, j */
	public readonly xorAU: ReadonlySet<T>;

	public constructor(testSets: TestSets<T>) {
		const { a, b, c, d, e, f, g, h, i, j } = testSets;

		this.xorAB = new Set<T>([ c, d, e, f ]);
		this.xorABC = new Set<T>([ e, f, g ]);
		this.xorDE = new Set<T>([ h, i ]);
		this.xorDEF = new Set<T>([ h, i, j ]);
		this.xorAD = new Set<T>([ a, b, c, e, h ]);
		this.xorABCDEF = new Set<T>([ e, f, g, h, i, j ]);
		this.xorAU = new Set<T>([ d, f, g, h, i, j ]);
	}
}
