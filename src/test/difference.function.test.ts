import { describe, expect, it } from '@jest/globals';
import { difference, equivalence } from '../index';
import { empty, setA, setB, setC } from './constants/testing-constants';

describe('difference', () => {
	const differenceAB = new Set<number>([ 2, 4 ]);
	const differenceABC = new Set<number>([ 4 ]);

	it('no sets difference returns empty set', () => {
		const result = difference();
		expect(equivalence(result, empty)).toBe(true);
	});

	it('single set difference returns self', () => {
		const result = difference(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('same set has no difference overlap', () => {
		const result = difference(setA, setA);
		expect(result.size).toBe(0);
	});

	it('two sets\' difference is a subset of the first', () => {
		const result = difference(setA, setB);
		expect(equivalence(result, differenceAB)).toBe(true);
	});

	it('three sets\' difference is a subset of the first', () => {
		const result = difference(setA, setB, setC);
		expect(equivalence(result, differenceABC)).toBe(true);
	});
});
