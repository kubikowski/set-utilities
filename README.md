# Set Utilities

[![NPM Version][]][npm]
[![MIT License][]][license]
[![FOSSA Status][]][fossa]
[![Install Size][]][package phobia]

[![Test Job][]][github test]
[![Coverage][]][coveralls]
[![Language][]][typescript]

This library is a collection of high performance utilities from Set Theory,
which operate on an arbitrary number of Sets by each accepting variable arguments.

Each utility function operates with the principals of immutability:
none of the input sets are modified in the process or result of calculation.


## Set Operations:

### difference: `A ∖ B`
The difference of two sets contains all the elements of the first set
that are not contained in the second (or thereafter).

![difference visual][]
```typescript
import { difference } from 'set-utilities';

const differenceAB = difference(setA, setB);
const differenceABC = difference(setA, setB, setC);
```

### intersection: `A ∩ B`
The intersection of two sets contains all the elements each contained in both of the sets.

![intersection visual][]
```typescript
import { intersection } from 'set-utilities';

const intersectionAB = intersection(setA, setB);
const intersectionABC = intersection(setA, setB, setC);
```

### union: `A ∪ B`
The union of two sets contains all the elements contained in either set (or both sets).

![union visual][]
```typescript
import { union } from 'set-utilities';

const unionAB = union(setA, setB);
const unionABC = union(setA, setB, setC);
```

### symmetric difference _(xor)_: `A ∆ B`
The symmetric difference of two sets contains only the unique elements of each set.

![xor visual][]
```typescript
import { xor } from 'set-utilities';

const xorAB = xor(setA, setB);
const xorABC = xor(setA, setB, setC);
```


## Set Comparisons:

### equivalence: `A ∼ B`
Sets are equivalent if they have the same cardinality,
and there is a bijection between the values contained in each set.

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
A Family of Sets are pairwise disjoint if
none of the Sets share any elements in common.

![pairwise disjoint visual][]
```typescript
import { pairwiseDisjoint } from 'set-utilities';

const isPairwiseDisjointAB = pairwiseDisjoint(setA, setB);
const isPairwiseDisjointABC = pairwiseDisjoint(setA, setB, setC);
```

### subset: `A ⊆ B`
A set is a subset of another if all of its elements
are elements of the other set.

![subset visual][]
```typescript
import { subset } from 'set-utilities';

const isSubsetAB = subset(setA, setB);
const isSubsetABC = subset(setA, setB, setC);
```

### proper subset: `A ⊂ B`
A set is a proper subset of another if all of its elements
are elements of the other set, and it has a lower cardinality
than the other set.

![proper subset visual][]
```typescript
import { properSubset } from 'set-utilities';

const isProperSubsetAB = properSubset(setA, setB);
const isProperSubsetABC = properSubset(setA, setB, setC);
```

### superset: `A ⊇ B`
A set is a superset of another if it contains all the elements
contained in the other set.

![superset visual][]
```typescript
import { superset } from 'set-utilities';

const isSupersetAB = superset(setA, setB);
const isSupersetABC = superset(setA, setB, setC);
```

### proper superset: `A ⊃ B`
A set is a proper superset of another if it contains all the elements
contained in the other set, and it has a greater cardinality
than the other set.

![proper superset visual][]
```typescript
import { properSuperset } from 'set-utilities';

const isProperSupersetAB = properSuperset(setA, setB);
const isProperSupersetABC = properSuperset(setA, setB, setC);
```


## Set Ordering:

### sort:
An immutable sorting operation for sets.
```typescript
import { sort } from 'set-utilities';

const sorted = sort(setA);
const sortedByComparator = sort(setA, comparatorFunction);
```


<!-- Badges -->

[NPM Version]: https://img.shields.io/npm/v/set-utilities
[npm]: https://www.npmjs.org/package/set-utilities

[MIT License]: https://img.shields.io/npm/l/set-utilities?color=blue
[license]: LICENSE

[FOSSA Status]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities.svg?type=shield
[fossa]: https://app.fossa.com/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities?ref=badge_shield

[Install Size]: https://packagephobia.com/badge?p=set-utilities
[package phobia]: https://packagephobia.com/result?p=set-utilities

[Test Job]: https://github.com/kubikowski/set-utilities/actions/workflows/test.yml/badge.svg
[github test]: https://github.com/kubikowski/set-utilities/actions/workflows/test.yml

[Coverage]: https://coveralls.io/repos/github/kubikowski/set-utilities/badge.svg?branch=main
[coveralls]: https://coveralls.io/github/kubikowski/set-utilities?branch=main

[Language]: https://img.shields.io/github/languages/top/kubikowski/set-utilities
[typescript]: https://www.typescriptlang.org


<!-- Assets -->

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
