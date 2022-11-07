import { TestSets } from './test-sets.model';

export class SymbolTestSets extends TestSets<symbol> {

	public override readonly canSortWithoutComparator = false;
	public override readonly willSortWithoutComparator = false;

	public constructor() {
		super(
			Symbol('a'),
			Symbol('b'),
			Symbol('c'),
			Symbol('d'),
			Symbol('e'),
			Symbol('f'),
			Symbol('g'),
			Symbol('h'),
			Symbol('i'),
			Symbol('j'),
		);
	}

	public override defaultComparator(first: symbol, second: symbol): number {
		return (first.description! < second.description!) ? -1 : 1;
	}

	public override reverseComparator(first: symbol, second: symbol): number {
		return (first.description! < second.description!) ? 1 : -1;
	}
}
