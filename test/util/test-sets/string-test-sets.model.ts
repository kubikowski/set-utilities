import { TestSets } from './test-sets.model';

export class StringTestSets extends TestSets<string> {
	public constructor() {
		super('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j');
	}
}
