import { describe, expect, it } from '@jest/globals';
import { ScaleTestSets } from '../util/scale/scale-test-sets.model';
import { Timer } from '../util/scale/timer.model';

describe('performance metrics', () => {

	describe('copying one set', () => {
		const { multiplesOf1 } = ScaleTestSets;

		time('one set ⋅ direct copy', () => new Set(multiplesOf1));
		time('one set ⋅ array copy', () => new Set([ ...multiplesOf1 ]));
		time('one set ⋅ adding elements', () => {
			const set = new Set<number>();
			for (const element of multiplesOf1) set.add(element);
			return set;
		});
	});

	describe('copying two sets', () => {
		const { multiplesOf2, multiplesOf2B } = ScaleTestSets;

		time('two sets ⋅ array copy', () => new Set([ ...multiplesOf2, ...multiplesOf2B ]));
		time('two sets ⋅ adding elements', () => {
			const set = new Set<number>();
			for (const element of multiplesOf2) set.add(element);
			for (const element of multiplesOf2B) set.add(element);
			return set;
		});
	});

	describe('copying three sets', () => {
		const { multiplesOf3, multiplesOf3B, multiplesOf3C } = ScaleTestSets;

		time('three sets ⋅ array copy', () => new Set([ ...multiplesOf3, ...multiplesOf3B, ...multiplesOf3C ]));
		time('three sets ⋅ adding elements', () => {
			const set = new Set<number>();
			for (const element of multiplesOf3) set.add(element);
			for (const element of multiplesOf3B) set.add(element);
			for (const element of multiplesOf3C) set.add(element);
			return set;
		});
	});
});

function time(methodName: string, method: () => Set<number>): void {
	it(methodName, () => {
		for (let index = 0; index < 50; index++) {
			if (index > 0 && index % 10 === 0) Timer.nextLine(methodName);
			const result = Timer.time(methodName, method);
			expect(result.size).toBe(15_000_000);
		}

		Timer.log(methodName);
	});
}
