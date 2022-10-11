import { describe, expect, it } from '@jest/globals';
import { superset } from '../index';
import { empty, setA, setB, setC, universal } from './constants/testing-constants';

describe('superset', () => {
	it('no sets are superset', () => {
		expect(superset()).toBe(true);
	});

	it('single set is a superset', () => {
		expect(superset(setA)).toBe(true);
	});

	it('same set is a superset', () => {
		expect(superset(setA, setA)).toBe(true);
	});

	it('many of the same set are supersets', () => {
		expect(superset(setA, setA, setA)).toBe(true);
	});

	it('two sets with different values are not superset', () => {
		expect(superset(setA, setB)).toBe(false);
	});

	it('three sets with different values are not superset', () => {
		expect(superset(setA, setB, setC)).toBe(false);
	});

	it('any set is a superset of the empty set', () => {
		expect(superset(setA, empty)).toBe(true);
	});

	it('the universal set is a superset of every set', () => {
		expect(superset(universal, setA, setB, setC, empty)).toBe(true);
	});
});
