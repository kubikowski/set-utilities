import { TestSets } from './test-sets.model';

type TestFunction = () => number;

export class FunctionTestSets extends TestSets<TestFunction> {
	public constructor() {
		super(
			() => 0,
			() => 1,
			() => 2,
			() => 3,
			() => 4,
			() => 5,
			() => 6,
			() => 7,
			() => 8,
			() => 9,
		);
	}
}
