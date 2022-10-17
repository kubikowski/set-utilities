# Set Utilities

[![NPM Version][npm-image]][npm-url]
[![MIT License][license-image]][license-url]
[![FOSSA Status][fossa-image]][fossa-url]
[![Install Size][package-phobia-image]][package-phobia-url]

[![Test Job][github-test-image]][github-test-url]
[![Coverage][coveralls-image]][coveralls-url]
[![Language][language-image]][language-url]

This library is a collection of utility functions that operate with JavaScript `Sets`.

Each function, as derived from Set Theory, is built to operate on n-ary sets by accepting variable arguments.
Additionally, each function operates with the principals of immutability: none of the input sets are modified in the process or result of calculation.


## Set Operations:

### difference: `A ∖ B`
The difference of two sets contains all the elements of the first set
that are not contained in the second (or thereafter).

![difference visual][difference-visual-url]
```typescript
import { difference } from 'set-utilities';

const differenceAB = difference(setA, setB);
const differenceABC = difference(setA, setB, setC);
```

### intersection: `A ∩ B`
The intersection of two sets contains all the elements each contained in both of the sets.

![intersection visual][intersection-visual-url]
```typescript
import { intersection } from 'set-utilities';

const intersectionAB = intersection(setA, setB);
const intersectionABC = intersection(setA, setB, setC);
```

### union: `A ∪ B`
The union of two sets contains all the elements contained in either set (or both sets).

![union visual][union-visual-url]
```typescript
import { union } from 'set-utilities';

const unionAB = union(setA, setB);
const unionABC = union(setA, setB, setC);
```

### symmetric difference _(xor)_: `A ∆ B`
The symmetric difference of two sets contains only the unique elements of each set.

![xor visual][xor-visual-url]
```typescript
import { xor } from 'set-utilities';

const xorAB = xor(setA, setB);
const xorABC = xor(setA, setB, setC);
```


## Set Comparisons:

### equivalence: `A ∼ B`
Sets are equivalent if they have the same cardinality,
and there is a bijection between the values contained in each set.
```typescript
import { equivalence } from 'set-utilities';

const isEquivalentAB = equivalence(setA, setB);
const isEquivalentABC = equivalence(setA, setB, setC);
```

### disjoint: `A ∩ B = ∅`
Sets are disjoint if they have no elements in common.
```typescript
import { disjoint } from 'set-utilities';

const isDisjointAB = disjoint(setA, setB);
const isDisjointABC = disjoint(setA, setB, setC);
```

### subset: `A ⊆ B`
A set is a subset of another if all of its elements
are elements of the other set.
```typescript
import { subset } from 'set-utilities';

const isSubsetAB = subset(setA, setB);
const isSubsetABC = subset(setA, setB, setC);
```

### superset: `A ⊇ B`
A set is a superset of another if it contains all the elements
contained in the other set.
```typescript
import { superset } from 'set-utilities';

const isSupersetAB = superset(setA, setB);
const isSupersetABC = superset(setA, setB, setC);
```


## Set Ordering:

### sort:
An immutable sorting operation for sets.
```typescript
import { sort } from 'set-utilities';

const sorted = sort(setA);
const sortedByComparator = sort(setA, comparatorFunction);
```


[npm-image]: http://img.shields.io/npm/v/set-utilities
[npm-url]: https://www.npmjs.org/package/set-utilities

[license-image]: https://img.shields.io/npm/l/set-utilities?color=blue
[license-url]: LICENSE

[fossa-image]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities?ref=badge_shield

[package-phobia-image]: https://packagephobia.com/badge?p=set-utilities
[package-phobia-url]: https://packagephobia.com/result?p=set-utilities

[github-test-image]: https://github.com/kubikowski/set-utilities/actions/workflows/test.yml/badge.svg
[github-test-url]: https://github.com/kubikowski/set-utilities/actions/workflows/test.yml

[coveralls-image]: https://coveralls.io/repos/github/kubikowski/set-utilities/badge.svg?branch=main
[coveralls-url]: https://coveralls.io/github/kubikowski/set-utilities?branch=main

[language-image]: https://img.shields.io/github/languages/top/kubikowski/set-utilities
[language-url]: https://www.typescriptlang.org

[difference-visual-url]: https://github.com/kubikowski/set-utilities/wiki/assets/difference.svg
[intersection-visual-url]: https://github.com/kubikowski/set-utilities/wiki/assets/intersection.svg
[union-visual-url]: https://github.com/kubikowski/set-utilities/wiki/assets/union.svg
[xor-visual-url]: https://github.com/kubikowski/set-utilities/wiki/assets/xor.svg
