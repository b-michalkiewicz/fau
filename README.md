# Functional Array Utils for TypeScript

`fau` helps you to work with arrays in more functional way.

**Inspired by**
- [Scala](https://www.scala-lang.org/)

---

## Table of Contents
- [distinct](#distinct)
- [groupBy](#groupBy)
- [partition](#partition)
- [sameElements](#sameElements)
- [unzip](#unzip)
- [zip](#zip)

---
## distinct
Returns an array of distinct elements from the given array based on an optional equality predictor.
```typescript
import { distinct } from "fau";

const unique = distinct([1, 1, 2, 2, 3]);

unique; // => [1, 2, 3]
```
---
## groupBy
Returns an array of distinct elements from the given array based on an optional equality predictor.
```typescript
import { groupBy } from "fau";

const divisibleBy2 = groupBy([1, 2, 3, 4, 5], (n) => n % 2 === 0);

divisibleBy2; // => Map { false => [ 1, 3, 5 ], true => [ 2, 4 ] }

const groupedByProperty = groupBy(
    [
        { key: 1, value: 1 },
        { key: 1, value: 2 },
        { key: 2, value: 22 },
        { key: 3, value: 3 },
    ],
    (o) => o.key,
);

groupedByProperty; /* =>
Map {
  1 => [ { key: 1, value: 1 }, { key: 1, value: 2 } ],
  2 => [ { key: 2, value: 22 } ],
  3 => [ { key: 3, value: 3 } ]
}
*/
```
---
## partition
Returns a pair of two arrays which first contains all elements that satisfy predicate p and second all elements that do not.
```typescript
import { partition } from "fau";

const greaterThan2 = partition([1, 2, 3, 4, 5], (n) => n > 2);

greaterThan2; // => [ [ 3, 4, 5 ], [ 1, 2 ] ]

const partitionedByProperty = partition([{ foo: 1 }, { bar: 2 }, { foo: 3 }, { bar: 4 }, { foo: 5 }], (o) => !!o.foo);

partitionedByProperty; // => [ [ { foo: 1 }, { foo: 3 }, { foo: 5 } ], [ { bar: 2 }, { bar: 4 } ] ]
```
---
## sameElements
Checks if two arrays have the same elements based on optional predicate function (if not provided === equality is used).
```typescript
import { sameElements } from "fau";

sameElements([1, 2, 3], [1, 2, 3]); // => true

sameElements([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }]); // => false

sameElements([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }], (a, b) => a.id === b.id); // => true
```
---
## unzip
Converts given array of tuples into tuple of two arrays.
```typescript
import { unzip } from "fau";

const unzipped = unzip([
    [1, "1"],
    [2, "2"],
    [3, "3"],
]);

unzipped; // => [ [ 1, 2, 3 ], [ '1', '2', '3' ] ]
```
---
## zip
Returns an array of tuples formed from two given arrays by combining corresponding elements in pairs.
```typescript
import { zip } from "fau";

const zipped = zip([1, 2, 3], ["1", "2", "3"]);

zipped; // => [ [ 1, '1' ], [ 2, '2' ], [ 3, '3' ] ]
```