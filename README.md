# Santi's Sorting Library
[![Build Status](https://github.com/santi100a/sorting-lib/actions/workflows/test.yml/badge.svg)](https://github.com/santi100a/sorting-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/sorting-lib)](https://npmjs.org/package/@santi100/sorting-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/sorting-lib.svg)](https://github.com/santi100a/sorting-lib)
[![License](https://img.shields.io/github/license/santi100a/sorting-lib.svg)](https://github.com/santi100a/sorting-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/sorting-lib)](https://bundlephobia.com/package/@santi100/sorting-lib@latest)

- 🚀 Lightweight and fast[^](#disclaimers)
- 👴 ES3-compliant[*](#disclaimers)
- 💻 Portable between the browser and Node.js

## What's this?
This is a library of sorting algorithms written in TypeScript. 
Currently, the library includes the following algorithms:

- Bubble sort
- Insertion sort
- Selection sort
- Merge sort
- Quick sort
- Bogo sort
- Radix sort

Thanks to [@fireship-io](https://github.com/fireship-io) for the idea, 
taken from [his video about sorting algorithms](https://www.youtube.com/watch?v=RfXt_qHDEPw)
and [its corresponding repo](https://github.com/fireship-io/sorting-algorithms).

## Installation
- Via NPM: `npm install @santi100/sorting-lib`
- Via Yarn: `yarn add @santi100/sorting-lib`
- Via PNPM: `pnpm install @santi100/sorting-lib`


## API
### Types
- `type SortComparator<T = unknown> = (a: T, b: T) => number;` Comparator function for every sorting algorithm, 
except for `radixSort`. It's fully compatible with `Array.prototype.sort`'s callback.
- `type SortOrder = 'ascending' | 'descending';` Sorting order string. Must be either `ascending` or `descending`.
- `interface SortOptions<T = unknown>;` Shape of the `opts` object passed to every sorting algorithm, except for `radixSort`.
See `RadixSortOptions` for the options specific to it.
  * `comparator?: SortComparator<T>;` Comparator function for every sorting algorithm, except for `radixSort`.
It's fully compatible with `Array.prototype.sort`'s callback. See `SortComparator`.
  * `order?: SortOrder;` Sorting order string. Must be either `ascending` or `descending`. See `SortOrder`.
- `interface RadixSortOptions extends SortOptions<number>;` Shape of the `opts` object exclusive to `radixSort`.
The only thing it overrides is the comparator so it's forcibly `undefined`.
  * `comparator?: never;` *I think this one is **very** self-explanatory...*
- `function bubbleSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];` 
Sorts `arr` with bubble-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
It takes the array to sort, and optional sorting options, and returns a sorted copy of `arr`.

**Time complexity:** Quadratic ($ O(n ^ 2) $).

- `function insertionSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];` 
Sorts `arr` with insertion-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
It takes the array to sort, and optional sorting options, and returns a sorted copy of `arr`.

**Time complexity (average and worst-case):** Quadratic ($ O(n ^ 2) $).

**Time complexity (best-case):** Linear ($ O(n) $).
- `function selectionSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];` 
Sorts `arr` with selection-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
It takes the array to sort, and optional sorting options, and returns a sorted copy of `arr`.

**Time complexity (average and worst-case):** Quadratic ($ O(n ^ 2) $).
- `function mergeSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];` 
Sorts `arr` with merge-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
It takes the array to sort, and optional sorting options, and returns a sorted copy of `arr`.

**Time complexity (average and worst-case):** Quasi-linear ($ O(n \log{n}) $).
- `function quickSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];` 
Sorts `arr` with quick-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
It takes the array to sort, and optional sorting options, and returns a sorted copy of `arr`.

**Time complexity (best and average):** Quasi-linear ($ O(n \log{n}) $).

**Time complexity (worst)**: Quadratic ($ O(n ^ 2) $).
- `function bogoSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];` 
Sorts `arr` with bogo-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
It takes the array to sort, and optional sorting options, and returns a sorted copy of `arr`.

**Time complexity (average):** Linear-factorial ($ O((n!)(n)) $).

**Worst-case time complexity:** Infinity ($ O(∞) $).
- `function radixSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];` 
Sorts `arr` with radix-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
It takes the array to sort, and optional sorting options, and returns a sorted copy of `arr`.

**Time complexity (best, average and worst):** $ O(n k) $, where $ k $ is the number of digits or characters in the
largest element.
- `function heapSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];` Sorts `arr` with heap-sort and returns a new sorted array (i.e.: doesn't mutate `arr`). 
It takes the array to sort, and optional sorting options, and returns a sorted copy of `arr`.

**Time complexity (best, average and worst):** Quasi-linear ($ O(n \log {n}) $).

## Usage
```typescript
import { mergeSort } from '@santi100/sorting-lib'; // ESM
const { mergeSort } = require('@santi100/sorting-lib'); // CJS
const sorted = mergeSort([4, 2, 5, 1, 3]); // sorted = [1, 2, 3, 4, 5]
const descendingSorted = mergeSort([4, 2, 5, 1, 3], { order: 'descending' }); // descendingSorted = [5, 4, 3, 2, 1]
const objSorted = mergeSort([
    {
        age: 23
    },
    {
        age: 12
    },
    {
        age: 30
    }
], { comparator: (a, b) => a.age - b.age }) // returns [ { age: 12 }, { age: 23 }, { age: 30 }]
// You can do same for all algorithms, except for `radixSort`, which is limited to ints for now, so 
// its only option is `order`.
```
## Contribute

Wanna contribute? [File an issue](issues) or [pull request](pulls)! 
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).

## Disclaimers
**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

*^The source code is just a few kilobytes in size.*