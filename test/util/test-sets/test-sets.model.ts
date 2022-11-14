/**
 * Elements:
 * - a: shared by setA, setB, setC, & minimal
 * - b: shared by setA, setB
 * - c: shared by setA, setC
 * - d: shared by setB, setC
 * - e: unique to setA
 * - f: unique to setB
 * - g: unique to setC
 * - h: unique to setD
 * - i: unique to setE
 * - j: unique to setF
 */
export abstract class TestSets<T> {

	/* the empty set: ∅, contains: none */
	public readonly empty: ReadonlySet<never>;
	/* the universal set: U, contains: a, b, c, d, e, f, g, h, i, j */
	public readonly universal: ReadonlySet<T>;

	/* contains: a, b, c, e */
	public readonly setA: ReadonlySet<T>;
	/* contains: a, b, d, f */
	public readonly setB: ReadonlySet<T>;
	/* contains: a, c, d, g */
	public readonly setC: ReadonlySet<T>;
	/* contains: h */
	public readonly setD: ReadonlySet<T>;
	/* contains: i */
	public readonly setE: ReadonlySet<T>;
	/* contains: j */
	public readonly setF: ReadonlySet<T>;

	/* shared by: setA, setB, setC, & minimal */
	public readonly a: T;
	/* shared by: setA, setB */
	public readonly b: T;
	/* shared by: setA, setC */
	public readonly c: T;
	/* shared by: setB, setC */
	public readonly d: T;
	/* unique to: setA */
	public readonly e: T;
	/* unique to: setB */
	public readonly f: T;
	/* unique to: setC */
	public readonly g: T;
	/* unique to: setD */
	public readonly h: T;
	/* unique to: setE */
	public readonly i: T;
	/* unique to: setF */
	public readonly j: T;

	/* whether the sort tests can run without a comparator */
	public readonly canSortWithoutComparator: boolean = true;
	/* whether the sort tests will sort correctly without a comparator */
	public readonly willSortWithoutComparator: boolean = true;

	protected constructor(a: T, b: T, c: T, d: T, e: T, f: T, g: T, h: T, i: T, j: T) {
		this.empty = new Set<never>();
		this.universal = new Set<T>([ a, b, c, d, e, f, g, h, i, j ]);

		this.setA = new Set<T>([ a, b, c, e ]);
		this.setB = new Set<T>([ a, b, d, f ]);
		this.setC = new Set<T>([ a, c, d, g ]);
		this.setD = new Set<T>([ h ]);
		this.setE = new Set<T>([ i ]);
		this.setF = new Set<T>([ j ]);

		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.e = e;
		this.f = f;
		this.g = g;
		this.h = h;
		this.i = i;
		this.j = j;
	}

	/* (default) less than comparator function */
	public defaultComparator(first: T, second: T): number {
		return (first < second) ? -1 : 1;
	}

	/* (reversed) greater than comparator function */
	public reverseComparator(first: T, second: T): number {
		return (first < second) ? 1 : -1;
	}
}
