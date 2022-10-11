import { describe, expect, it } from '@jest/globals';
import { equivalence, intersection } from '../../src';
import { empty, setA, setB, setC } from '../constants/testing-constants';

describe('intersection', () => {
	const intersectionAB = new Set<number>([ 0, 1 ]);
	const intersectionABC = new Set<number>([ 0 ]);

	it('no sets intersection returns empty set', () => {
		const result = intersection();
		expect(equivalence(result, empty)).toBe(true);
	});

	it('single set intersection returns self', () => {
		const result = intersection(setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('same set intersection returns self', () => {
		const result = intersection(setA, setA);
		expect(equivalence(result, setA)).toBe(true);
	});

	it('two sets\' intersection is a subset of the first', () => {
		const result = intersection(setA, setB);
		expect(equivalence(result, intersectionAB)).toBe(true);
	});

	it('three sets\' intersection is a subset of the first', () => {
		const result = intersection(setA, setB, setC);
		expect(equivalence(result, intersectionABC)).toBe(true);
	});
});
