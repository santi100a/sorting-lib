import { SortOptions } from './core';
/**
 * Sorts `arr` with bogo-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average):** Linear-factorial (O(n * n!)).
 *
 * **Worst-case time complexity:** Infinity (O(∞)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
declare const _default: <T = unknown>(arr: T[], opts?: SortOptions<T>) => T[];
export = _default;
