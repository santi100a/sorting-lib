import { CountingSortOptions } from './core';
/**
 * Sorts `arr` with counting-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worse):** O(n + k), where k is the range of
 * input (maximum element - minimum element + 1).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
declare const _default: (arr: number[], opts?: CountingSortOptions) => any[];
export = _default;
