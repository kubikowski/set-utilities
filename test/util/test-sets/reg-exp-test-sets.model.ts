import { TestSets } from './test-sets.model';

export class RegExpTestSets extends TestSets<RegExp> {
	public constructor() {
		super(/a/, /b/, /c/, /d/, /e/, /f/, /g/, /h/, /i/, /j/);
	}
}
