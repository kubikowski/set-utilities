# ![set utilities][]

[![NPM Version][]][npm]
[![MIT License][]][license]
[![FOSSA Status][]][fossa]

[![Build & Test Job][]][github build test]
[![Scale Test Job][]][github scale test]
[![Coverage][]][coveralls]

[![Install Size][]][package phobia]
[![Zipped Size][]][bundle phobia]
[![Language][]][typescript]

High performance set theory.

This library is a collection of functional utilities from set theory,
each of which operate on an arbitrary number of input sets.

Each function accepts variable arguments and operates with the principals of immutability:
none of the input sets are modified in the process of calculation.


## Set Operations:

### difference: `A ∖ B`
The difference of sets contains all the elements
of the first set, not contained in other sets.

![difference visual][]
```typescript
import { difference } from 'set-utilities';

const differenceAB = difference(setA, setB);
const differenceABC = difference(setA, setB, setC);
```

### intersection: `A ∩ B`
The intersection of sets contains all the elements
each contained in every set.

![intersection visual][]
```typescript
import { intersection } from 'set-utilities';

const intersectionAB = intersection(setA, setB);
const intersectionABC = intersection(setA, setB, setC);
```

### union: `A ∪ B`
The union of sets contains all the elements
each contained in any set.

![union visual][]
```typescript
import { union } from 'set-utilities';

const unionAB = union(setA, setB);
const unionABC = union(setA, setB, setC);
```

### symmetric difference _(xor)_: `A ∆ B`
The symmetric difference of sets contains
only the unique elements of each set.

![xor visual][]
```typescript
import { xor } from 'set-utilities';

const xorAB = xor(setA, setB);
const xorABC = xor(setA, setB, setC);
```


## Set Comparisons:

### equivalence: `A ∼ B`
Sets are equivalent if they have the same cardinality,
and there is a bijection between the elements contained in each set.

![equivalence visual][]
```typescript
import { equivalence } from 'set-utilities';

const isEquivalentAB = equivalence(setA, setB);
const isEquivalentABC = equivalence(setA, setB, setC);
```

### disjoint: `A ∩ B = ∅`
Sets are disjoint if they have no elements in common.

![disjoint visual][]
```typescript
import { disjoint } from 'set-utilities';

const isDisjointAB = disjoint(setA, setB);
const isDisjointABC = disjoint(setA, setB, setC);
```

### pairwise disjoint: `A ∩ B ∩ C = ∅`
A family of sets are pairwise disjoint if
none of the sets share any elements in common.

![pairwise disjoint visual][]
```typescript
import { pairwiseDisjoint } from 'set-utilities';

const isPairwiseDisjointAB = pairwiseDisjoint(setA, setB);
const isPairwiseDisjointABC = pairwiseDisjoint(setA, setB, setC);
```

### subset: `A ⊆ B`
A set is a subset of another if all of its elements
are contained in the other set.

![subset visual][]
```typescript
import { subset } from 'set-utilities';

const isSubsetAB = subset(setA, setB);
const isSubsetABC = subset(setA, setB, setC);
```

### proper subset: `A ⊂ B`
A set is a proper subset of another if all of its elements
are contained in the other set,
and it has a lower cardinality than the other set.

![proper subset visual][]
```typescript
import { properSubset } from 'set-utilities';

const isProperSubsetAB = properSubset(setA, setB);
const isProperSubsetABC = properSubset(setA, setB, setC);
```

### superset: `A ⊇ B`
A set is a superset of another if it contains
all the elements contained in the other set.

![superset visual][]
```typescript
import { superset } from 'set-utilities';

const isSupersetAB = superset(setA, setB);
const isSupersetABC = superset(setA, setB, setC);
```

### proper superset: `A ⊃ B`
A set is a proper superset of another if it contains
all the elements contained in the other set,
and it has a greater cardinality than the other set.

![proper superset visual][]
```typescript
import { properSuperset } from 'set-utilities';

const isProperSupersetAB = properSuperset(setA, setB);
const isProperSupersetABC = properSuperset(setA, setB, setC);
```


## Set Ordering:

### sort: `A ⇅`
An immutable sorting operation for sets.

![sort visual][]
```typescript
import { sort } from 'set-utilities';

const sortedA = sort(setA);
const sortedB = sort(setB, compareFunction);
```


<!-- Badges -->

[NPM Version]: https://img.shields.io/npm/v/set-utilities
[npm]: https://www.npmjs.org/package/set-utilities

[MIT License]: https://img.shields.io/npm/l/set-utilities?color=blue
[license]: LICENSE

[FOSSA Status]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities.svg?type=shield
[fossa]: https://app.fossa.com/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities?ref=badge_shield

[Build & Test Job]: https://github.com/kubikowski/set-utilities/actions/workflows/test.yml/badge.svg
[github build test]: https://github.com/kubikowski/set-utilities/actions/workflows/test.yml

[Scale Test Job]: https://github.com/kubikowski/set-utilities/actions/workflows/scale-test.yml/badge.svg
[github scale test]: https://github.com/kubikowski/set-utilities/actions/workflows/scale-test.yml

[Coverage]: https://coveralls.io/repos/github/kubikowski/set-utilities/badge.svg?branch=main
[coveralls]: https://coveralls.io/github/kubikowski/set-utilities?branch=main

[Install Size]: https://packagephobia.com/badge?p=set-utilities
[package phobia]: https://packagephobia.com/result?p=set-utilities

[Zipped Size]: https://img.shields.io/bundlephobia/minzip/set-utilities?color=success
[bundle phobia]: https://bundlephobia.com/package/set-utilities

[Language]: https://img.shields.io/github/languages/top/kubikowski/set-utilities
[typescript]: https://www.typescriptlang.org


<!-- Assets -->

[set utilities]: https://github.com/kubikowski/set-utilities/wiki/assets/set-utilities.svg

[difference visual]: https://github.com/kubikowski/set-utilities/wiki/assets/difference.svg
[intersection visual]: https://github.com/kubikowski/set-utilities/wiki/assets/intersection.svg
[union visual]: https://github.com/kubikowski/set-utilities/wiki/assets/union.svg
[xor visual]: https://github.com/kubikowski/set-utilities/wiki/assets/xor.svg

[equivalence visual]: https://github.com/kubikowski/set-utilities/wiki/assets/equivalence.svg
[disjoint visual]: https://github.com/kubikowski/set-utilities/wiki/assets/disjoint.svg
[pairwise disjoint visual]: https://github.com/kubikowski/set-utilities/wiki/assets/pairwise-disjoint.svg
[subset visual]: https://github.com/kubikowski/set-utilities/wiki/assets/subset.svg
[proper subset visual]: https://github.com/kubikowski/set-utilities/wiki/assets/proper-subset.svg
[superset visual]: https://github.com/kubikowski/set-utilities/wiki/assets/superset.svg
[proper superset visual]: https://github.com/kubikowski/set-utilities/wiki/assets/proper-superset.svg

[sort visual]: https://github.com/kubikowski/set-utilities/wiki/assets/sort.svg
