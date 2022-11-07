import { TestSets } from './test-sets.model';

type TestObject = { readonly id: number };

export class ObjectTestSets extends TestSets<TestObject> {

	public override readonly willSortWithoutComparator = false;

	public constructor() {
		super(
			{ id: 0 },
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
			{ id: 6 },
			{ id: 7 },
			{ id: 8 },
			{ id: 9 },
		);
	}

	public override defaultComparator(first: TestObject, second: TestObject): number {
		return (first.id < second.id) ? -1 : 1;
	}

	public override reverseComparator(first: TestObject, second: TestObject): number {
		return (first.id < second.id) ? 1 : -1;
	}
}
