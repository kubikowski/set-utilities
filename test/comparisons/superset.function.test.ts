import { describe, expect, it } from '@jest/globals';
import {subset, superset} from '../../src';
import {empty, minimal, setA, setB, setC, setD, universal} from '../constants/testing-constants';

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

	it('two sets with different values are not supersets', () => {
		expect(superset(setA, setB)).toBe(false);
	});

	it('three sets with different values are not supersets', () => {
		expect(superset(setA, setB, setC)).toBe(false);
	});

	it('the empty set is a superset of itself', () => {
		expect(superset(empty, empty)).toBe(true);
	});

	/* custom superset tests */

	it('following sets with greater cardinalities are not supersets', () => {
		expect(superset(minimal, setA)).toBe(false);
	});

	it('sets without value bijection are not supersets', () => {
		expect(subset(setA, setD)).toBe(false);
	});

	it('any set is a superset of the empty set', () => {
		expect(superset(setA, empty)).toBe(true);
	});

	it('the universal set is a superset of every set', () => {
		expect(superset(universal, setA, setB, setC, minimal, empty)).toBe(true);
	});
});
