import { describe } from '@jest/globals';
import { disjointScaleTest } from './comparisons/disjoint.function.scale.test';
import { equivalenceScaleTest } from './comparisons/equivalence.function.scale.test';
import { pairwiseDisjointScaleTest } from './comparisons/pairwise-disjoint.function.scale.test';
import { properSubsetScaleTest } from './comparisons/proper-subset.function.scale.test';
import { properSupersetScaleTest } from './comparisons/proper-superset.function.scale.test';
import { subsetScaleTest } from './comparisons/subset.function.scale.test';
import { supersetScaleTest } from './comparisons/superset.function.scale.test';
import { differenceScaleTest } from './operations/difference.function.scale.test';
import { intersectionScaleTest } from './operations/intersection.function.scale.test';
import { unionScaleTest } from './operations/union.function.scale.test';
import { xorScaleTest } from './operations/xor.function.scale.test';
import { sortScaleTest } from './ordering/sort.function.scale.test';

describe('Scale Tests', () => {

	describe('Operations', () => {
		describe('difference', differenceScaleTest);
		describe('intersection', intersectionScaleTest);
		describe('union', unionScaleTest);
		describe('xor', xorScaleTest);
	});

	describe('Comparisons', () => {
		describe('disjoint', disjointScaleTest);
		describe('equivalence', equivalenceScaleTest);
		describe('pairwise disjoint', pairwiseDisjointScaleTest);
		describe('proper subset', properSubsetScaleTest);
		describe('proper superset', properSupersetScaleTest);
		describe('subset', subsetScaleTest);
		describe('superset', supersetScaleTest);
	});

	describe('Ordering', () => {
		describe('sort', sortScaleTest);
	});
});
