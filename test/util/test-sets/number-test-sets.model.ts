import { TestSets } from './test-sets.model';

export class NumberTestSets extends TestSets<number> {
	public constructor() {
		super(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
	}
}
