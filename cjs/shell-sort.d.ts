import { SortOptions } from './core';
/**
 * Sorts `arr` with shell-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity:** Depends on the gap sequence used. Best known is O(n log^2 n).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
declare const _default: <T = unknown>(arr: T[], opts?: SortOptions<T>) => T[];
export = _default;
