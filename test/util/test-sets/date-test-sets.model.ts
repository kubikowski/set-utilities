import { TestSets } from './test-sets.model';

export class DateTestSets extends TestSets<Date> {

	public override readonly willSortWithoutComparator = false;

	public constructor() {
		super(
			new Date(0),
			new Date(1),
			new Date(2),
			new Date(3),
			new Date(4),
			new Date(5),
			new Date(6),
			new Date(7),
			new Date(8),
			new Date(9),
		);
	}
}
