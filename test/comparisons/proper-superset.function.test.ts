import { describe, expect, it } from '@jest/globals';
import { properSuperset } from '../../src';
import { empty, minimal, setA, setB, setC, setD, universal } from '../constants/testing-constants';

describe('proper superset', () => {
	it('no sets are proper supersets', () => {
		expect(properSuperset()).toBe(true);
	});

	it('single set is a proper superset', () => {
		expect(properSuperset(setA)).toBe(true);
	});

	it('same set is not a proper superset', () => {
		expect(properSuperset(setA, setA)).toBe(false);
	});

	it('many of the same set are not proper supersets', () => {
		expect(properSuperset(setA, setA, setA)).toBe(false);
	});

	it('two sets with different values are not proper supersets', () => {
		expect(properSuperset(setA, setB)).toBe(false);
	});

	it('three sets with different values are not proper supersets', () => {
		expect(properSuperset(setA, setB, setC)).toBe(false);
	});

	it('the empty set is not a proper superset of itself', () => {
		expect(properSuperset(empty, empty)).toBe(false);
	});

	/* custom proper superset tests */

	it('following sets with greater cardinalities are not proper supersets', () => {
		expect(properSuperset(minimal, setA)).toBe(false);
	});

	it('sets without value bijection are not proper supersets', () => {
		expect(properSuperset(setA, setD)).toBe(false);
	});

	it('any non-empty set is a proper superset of the empty set', () => {
		expect(properSuperset(setA, empty)).toBe(true);
	});

	it('the universal set is a proper superset of every non-universal set', () => {
		expect(properSuperset(universal, setA, setB, setC, minimal, empty)).toBe(true);
	});
});
