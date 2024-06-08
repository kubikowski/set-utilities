import { TestSets } from './test-sets.model';

type TestMap = Map<'id', number>;

export class MapTestSets extends TestSets<TestMap> {

	public override readonly willSortWithoutComparator = false;

	public constructor() {
		super(
			new Map([ [ 'id', 0 ] ]),
			new Map([ [ 'id', 1 ] ]),
			new Map([ [ 'id', 2 ] ]),
			new Map([ [ 'id', 3 ] ]),
			new Map([ [ 'id', 4 ] ]),
			new Map([ [ 'id', 5 ] ]),
			new Map([ [ 'id', 6 ] ]),
			new Map([ [ 'id', 7 ] ]),
			new Map([ [ 'id', 8 ] ]),
			new Map([ [ 'id', 9 ] ]),
		);
	}

	public override defaultComparator(first: TestMap, second: TestMap): number {
		return (first.get('id')! < second.get('id')!) ? -1 : 1;
	}

	public override reverseComparator(first: TestMap, second: TestMap): number {
		return (first.get('id')! < second.get('id')!) ? 1 : -1;
	}
}
