import { TestSets } from './test-sets.model';

type TestSet = Set<number>;

export class SetTestSets extends TestSets<TestSet> {

	public override readonly willSortWithoutComparator = false;

	public constructor() {
		super(
			new Set([ 0 ]),
			new Set([ 1 ]),
			new Set([ 2 ]),
			new Set([ 3 ]),
			new Set([ 4 ]),
			new Set([ 5 ]),
			new Set([ 6 ]),
			new Set([ 7 ]),
			new Set([ 8 ]),
			new Set([ 9 ]),
		);
	}

	public override defaultComparator(first: TestSet, second: TestSet): number {
		return (first.values().next().value < second.values().next().value) ? -1 : 1;
	}

	public override reverseComparator(first: TestSet, second: TestSet): number {
		return (first.values().next().value < second.values().next().value) ? 1 : -1;
	}
}
