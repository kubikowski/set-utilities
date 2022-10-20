import { describe, expect, it } from '@jest/globals';
import { subset } from '../../src';
import { empty, minimal, setA, setB, setC, setD, universal } from '../constants/testing-constants';

describe('subset', () => {
	it('no sets are subsets', () => {
		expect(subset()).toBe(true);
	});

	it('single set is a subset', () => {
		expect(subset(setA)).toBe(true);
	});

	it('same set is a subset', () => {
		expect(subset(setA, setA)).toBe(true);
	});

	it('many of the same set are subsets', () => {
		expect(subset(setA, setA, setA)).toBe(true);
	});

	it('two sets with different values are not subsets', () => {
		expect(subset(setA, setB)).toBe(false);
	});

	it('three sets with different values are not subsets', () => {
		expect(subset(setA, setB, setC)).toBe(false);
	});

	it('the empty set is a subset of itself', () => {
		expect(subset(empty, empty)).toBe(true);
	});

	/* custom subset tests */

	it('following sets with lower cardinalities are not subsets', () => {
		expect(subset(setA, minimal)).toBe(false);
	});

	it('sets without value bijection are not subsets', () => {
		expect(subset(setD, setA)).toBe(false);
	});

	it('any set is a subset of the universal set', () => {
		expect(subset(setA, universal)).toBe(true);
	});

	it('the empty set is a subset of every set', () => {
		expect(subset(empty, minimal, setA, setB, setC, universal)).toBe(true);
	});
});
