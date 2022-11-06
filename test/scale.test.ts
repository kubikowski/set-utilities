import { describe } from '@jest/globals';
import { disjointScaleTests } from './comparisons/disjoint.function.scale.test';
import { equivalenceScaleTests } from './comparisons/equivalence.function.scale.test';
import { pairwiseDisjointScaleTests } from './comparisons/pairwise-disjoint.function.scale.test';
import { properSubsetScaleTests } from './comparisons/proper-subset.function.scale.test';
import { properSupersetScaleTests } from './comparisons/proper-superset.function.scale.test';
import { subsetScaleTests } from './comparisons/subset.function.scale.test';
import { supersetScaleTests } from './comparisons/superset.function.scale.test';
import { differenceScaleTests } from './operations/difference.function.scale.test';
import { intersectionScaleTests } from './operations/intersection.function.scale.test';
import { unionScaleTests } from './operations/union.function.scale.test';
import { xorScaleTests } from './operations/xor.function.scale.test';
import { sortScaleTests } from './ordering/sort.function.scale.test';

describe('Scale Tests', () => {

	describe('Operations', () => {
		describe('difference', differenceScaleTests);
		describe('intersection', intersectionScaleTests);
		describe('union', unionScaleTests);
		describe('xor', xorScaleTests);
	});

	describe('Comparisons', () => {
		describe('disjoint', disjointScaleTests);
		describe('equivalence', equivalenceScaleTests);
		describe('pairwise disjoint', pairwiseDisjointScaleTests);
		describe('proper subset', properSubsetScaleTests);
		describe('proper superset', properSupersetScaleTests);
		describe('subset', subsetScaleTests);
		describe('superset', supersetScaleTests);
	});

	describe('Ordering', () => {
		describe('sort', sortScaleTests);
	});
});
