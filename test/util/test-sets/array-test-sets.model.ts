import { TestSets } from './test-sets.model';

type TestArray = [ number ];

export class ArrayTestSets extends TestSets<TestArray> {
	public constructor() {
		super([ 0 ], [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ]);
	}
}
