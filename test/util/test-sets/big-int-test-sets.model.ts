import { TestSets } from './test-sets.model';

export class BigIntTestSets extends TestSets<bigint> {
	public constructor() {
		super(
			BigInt(0),
			BigInt(1),
			BigInt(2),
			BigInt(3),
			BigInt(4),
			BigInt(5),
			BigInt(6),
			BigInt(7),
			BigInt(8),
			BigInt(9),
		);
	}
}
