import { RadixSortOptions } from './core';
/**
 * Sorts `arr` with radix-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** O(n * k), where `k` is the number of digits or characters
 * in the largest element.
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
declare const _default: (arr: number[], opts?: RadixSortOptions) => number[];
export = _default;
