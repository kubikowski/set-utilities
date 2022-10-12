# Set Utilities
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities?ref=badge_shield)


This library is a collection of utility functions that operate with JavaScript `Sets`.

Each function, as derived from Set Theory, is built to operate on n-ary sets by accepting variable arguments.
Additionally, each function operates with the principals of immutability: none of the input sets are modified in the process or result of calculation.


## Set Operations:

### difference:
The difference of two sets contains all the elements of the first set
that are not contained in the second (or thereafter).
```typescript
import { difference } from 'set-utilities';

const differenceAB = difference(setA, setB);
const differenceABC = difference(setA, setB, setC);
```

### intersection:
The intersection of two sets contains all the elements each contained in both of the sets.
```typescript
import { intersection } from 'set-utilities';

const intersectionAB = intersection(setA, setB);
const intersectionABC = intersection(setA, setB, setC);
```

### union:
The union of two sets contains all the elements contained in either set (or both sets).
```typescript
import { union } from 'set-utilities';

const unionAB = union(setA, setB);
const unionABC = union(setA, setB, setC);
```

### xor _(symmetric difference)_:
The symmetric difference of two sets contains only the unique elements of each set.
```typescript
import { xor } from 'set-utilities';

const xorAB = xor(setA, setB);
const xorABC = xor(setA, setB, setC);
```


## Set Comparisons:

### equivalence:
Sets are equivalent if they have the same cardinality,
and there is a bijection between the values contained in each set.
```typescript
import { equivalence } from 'set-utilities';

const isEquivalentAB = equivalence(setA, setB);
const isEquivalentABC = equivalence(setA, setB, setC);
```

### disjoint:
Sets are disjoint if they have no elements in common.
```typescript
import { disjoint } from 'set-utilities';

const isDisjointAB = disjoint(setA, setB);
const isDisjointABC = disjoint(setA, setB, setC);
```

### subset:
A set is a subset of another if all of its elements
are elements of the other set.
```typescript
import { subset } from 'set-utilities';

const isSubsetAB = subset(setA, setB);
const isSubsetABC = subset(setA, setB, setC);
```

### superset:
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


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkubikowski%2Fset-utilities?ref=badge_large)