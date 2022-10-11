import { describe, expect, it } from '@jest/globals';
import { disjoint } from '../../src';
import { empty, setA, setB, setC, setD } from '../constants/testing-constants';

describe('disjoint', () => {
	it('no sets are disjoint', () => {
		expect(disjoint()).toBe(true);
	});

	it('single set is disjoint', () => {
		expect(disjoint(setA)).toBe(true);
	});

	it('same set is not disjoint', () => {
		expect(disjoint(setA, setA)).toBe(false);
	});

	it('many of the same set are not disjoint', () => {
		expect(disjoint(setA, setA, setA)).toBe(false);
	});

	it('two sets with some shared values are not disjoint', () => {
		expect(disjoint(setA, setB)).toBe(false);
	});

	it('three sets with some shared values are not disjoint', () => {
		expect(disjoint(setA, setB, setC)).toBe(false);
	});

	it('two sets with no shared values are disjoint', () => {
		expect(disjoint(setA, setD)).toBe(true);
	});

	it('any set and the empty set are disjoint', () => {
		expect(disjoint(setA, empty)).toBe(true);
	});

	it('two of the empty set are disjoint', () => {
		expect(disjoint(empty, empty)).toBe(true);
	});
});
