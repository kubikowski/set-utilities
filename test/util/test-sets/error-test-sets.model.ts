import { TestSets } from './test-sets.model';

export class ErrorTestSets extends TestSets<Error> {
	public constructor() {
		super(
			new Error('a'),
			new Error('b'),
			new Error('c'),
			new Error('d'),
			new Error('e'),
			new Error('f'),
			new Error('g'),
			new Error('h'),
			new Error('i'),
			new Error('j'),
		);
	}
}
