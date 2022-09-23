## Set Utilities

This library is a collection of utility functions that operate with JavaScript `Sets`.

Each function that is derived from Set Theory is built to operate on n-ary sets, by accepting an array

### difference:
The difference of two sets contains all the elements of the first set
that are not contained in the second (or thereafter).
```typescript
import { difference } from 'set-utilities';

const differenceAB = difference(setA, setB);
const differenceABC = difference(setA, setB, setC);
```

### equivalence:
Sets are equivalent if they have the same cardinality,
and there is a bijection between the values contained in each set.
```typescript
import { equivalence } from 'set-utilities';

const isEquivalentAB = equivalence(setA, setB);
const isEquivalentABC = equivalence(setA, setB, setC);
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
