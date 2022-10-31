import { describe, expect, it } from '@jest/globals';
import { properSubset } from '../../src';
import { empty, minimal, setA, setB, setC, setD, setE, setF, universal } from '../constants/testing-constants';

describe('proper subset', () => {
	it('no sets are proper subsets', () => {
		expect(properSubset()).toBe(true);
	});

	it('single set is a proper subset', () => {
		expect(properSubset(setA)).toBe(true);
	});

	it('same set is not a proper subset', () => {
		expect(properSubset(setA, setA)).toBe(false);
	});

	it('many of the same set are not proper subsets', () => {
		expect(properSubset(setA, setA, setA)).toBe(false);
	});

	it('two sets with different values are not proper subsets', () => {
		expect(properSubset(setA, setB)).toBe(false);
	});

	it('three sets with different values are not proper subsets', () => {
		expect(properSubset(setA, setB, setC)).toBe(false);
	});

	it('many sets with different values are not proper subsets', () => {
		expect(properSubset(setA, setB, setC, setD, setE, setF)).toBe(false);
	});

	it('any non-empty set is not a proper subset of the empty set', () => {
		expect(properSubset(setA, empty)).toBe(false);
	});

	it('any non-universal set is a proper subset of the universal set', () => {
		expect(properSubset(setA, universal)).toBe(true);
	});

	it('the empty set is not a proper subset of itself', () => {
		expect(properSubset(empty, empty)).toBe(false);
	});

	/* custom proper subset tests */

	it('following sets with lower cardinalities are not proper subsets', () => {
		expect(properSubset(setA, minimal)).toBe(false);
	});

	it('sets without value bijection are not proper subsets', () => {
		expect(properSubset(setD, setA)).toBe(false);
	});

	it('the empty set is a proper subset of every non-empty set', () => {
		expect(properSubset(empty, minimal, setA, setB, setC, universal)).toBe(true);
	});
});
