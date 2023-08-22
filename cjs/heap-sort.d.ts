import { SortOptions } from './core';
/**
 * Sorts `arr` with heap-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** Quasi-linear (O(n log n)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
declare const _default: <T = unknown>(arr: T[], opts?: SortOptions<T>) => T[];
export = _default;
