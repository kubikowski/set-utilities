import { TestSets } from './test-sets.model';

enum TestEnum { A, B, C, D, E, F, G, H, I, J }

export class EnumTestSets extends TestSets<TestEnum> {
	public constructor() {
		super(
			TestEnum.A,
			TestEnum.B,
			TestEnum.C,
			TestEnum.D,
			TestEnum.E,
			TestEnum.F,
			TestEnum.G,
			TestEnum.H,
			TestEnum.I,
			TestEnum.J,
		);
	}
}
