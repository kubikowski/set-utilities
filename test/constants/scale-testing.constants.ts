import { Multiples } from './multiples.model';
import { Timer } from './timer.model';

export const multiplesOf1 = Multiples.of1;
export const multiplesOf2 = Multiples.of2;
export const multiplesOf3 = Multiples.of3;

export const someEquivalent = Multiples.someEquivalent;
export const manyEquivalent = Multiples.manyEquivalent;
export const someDisjoint = Multiples.someDisjoint;
export const manyDisjoint = Multiples.manyDisjoint;

export const coupleEquivalent = Multiples.coupleEquivalent;
export const fewEquivalent = Multiples.fewEquivalent;
export const coupleDisjoint = Multiples.coupleDisjoint;
export const fewDisjoint = Multiples.fewDisjoint;
export const times = 100_000;

export const padding = 38;
Timer.logAll();
