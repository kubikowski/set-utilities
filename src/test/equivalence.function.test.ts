import { describe, expect, it } from '@jest/globals';
import { equivalence } from '../index';
import { setA, setB, setC } from './constants/testing-constants';

describe('equivalence', () => {
	it('no sets are equivalent', () => {
		expect(equivalence()).toBe(true);
	});

	it('single set is equivalent', () => {
		expect(equivalence(setA)).toBe(true);
	});

	it('same set is equivalent', () => {
		expect(equivalence(setA, setA)).toBe(true);
	});

	it('many of the same set are equivalent', () => {
		expect(equivalence(setA, setA, setA)).toBe(true);
	});

	it('two different sets are not equivalent', () => {
		expect(equivalence(setA, setB)).toBe(false);
	});

	it('three different sets are not equivalent', () => {
		expect(equivalence(setA, setB, setC)).toBe(false);
	});
});
