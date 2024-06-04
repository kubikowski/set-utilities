import { describe } from '@jest/globals';
import { ArrayTestSets } from './test-sets/array-test-sets.model';
import { BigIntTestSets } from './test-sets/big-int-test-sets.model';
import { DateTestSets } from './test-sets/date-test-sets.model';
import { EnumTestSets } from './test-sets/enum-test-sets.model';
import { ErrorTestSets } from './test-sets/error-test-sets.model';
import { FunctionTestSets } from './test-sets/function-test-sets.model';
import { MapTestSets } from './test-sets/map-test-sets.model';
import { NumberTestSets } from './test-sets/number-test-sets.model';
import { ObjectTestSets } from './test-sets/object-test-sets.model';
import { RegExpTestSets } from './test-sets/reg-exp-test-sets.model';
import { SetTestSets } from './test-sets/set-test-sets.model';
import { StringTestSets } from './test-sets/string-test-sets.model';
import { SymbolTestSets } from './test-sets/symbol-test-sets.model';
import { TestSets } from './test-sets/test-sets.model';

export function testSuite(name: string, tests: (testSets: TestSets<unknown>) => void): void {
	describe(`${ name } ⋅ array`, () => tests(new ArrayTestSets()));
	describe(`${ name } ⋅ bigint`, () => tests(new BigIntTestSets()));
	describe(`${ name } ⋅ date`, () => tests(new DateTestSets()));
	describe(`${ name } ⋅ enum`, () => tests(new EnumTestSets()));
	describe(`${ name } ⋅ error`, () => tests(new ErrorTestSets()));
	describe(`${ name } ⋅ function`, () => tests(new FunctionTestSets()));
	describe(`${ name } ⋅ map`, () => tests(new MapTestSets()));
	describe(`${ name } ⋅ number`, () => tests(new NumberTestSets()));
	describe(`${ name } ⋅ object`, () => tests(new ObjectTestSets()));
	describe(`${ name } ⋅ regexp`, () => tests(new RegExpTestSets()));
	describe(`${ name } ⋅ set`, () => tests(new SetTestSets()));
	describe(`${ name } ⋅ string`, () => tests(new StringTestSets()));
	describe(`${ name } ⋅ symbol`, () => tests(new SymbolTestSets()));
}
