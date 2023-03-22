/**
 * Comparator function for every sorting algorithm, except for {@link radixSort}.
 * It's fully compatible with {@link Array.prototype.sort}'s callback.
 */
export type SortComparator<T = unknown> = (a: T, b: T) => number;
/**
 * Sorting order string. Must be either `ascending` or `descending`.
 */
export type SortOrder = 'ascending' | 'descending';
/**
 * Shape of the `opts` object passed to every sorting algorithm, except for {@link radixSort}.
 * See {@link RadixSortOptions} for the options specific to it.
 */
export interface SortOptions<T = unknown> {
    /**
     * Comparator function for every sorting algorithm, except for {@link radixSort}.
     * It's fully compatible with {@link Array.prototype.sort}'s callback. See {@link SortComparator}.
     */
    comparator?: SortComparator<T>;
    /**
     * Sorting order string. Must be either `ascending` or `descending`. See {@link SortOrder}.
     */
    order?: SortOrder;
}
/**
 * Shape of the `opts` object exclusive to {@link radixSort}.
 * The only thing it overrides is the comparator so it's forcibly `undefined`.
 */
export interface RadixSortOptions extends SortOptions<number> {
    comparator?: never;
}
/**
 * Sorts `arr` with bubble-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity:** Quadratic (O(n ^ 2)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export declare function bubbleSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];
/**
 * Sorts `arr` with insertion-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average and worst-case):** Quadratic (O(n ^ 2)).
 *
 * **Time complexity (best-case):** Linear (O(n)).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export declare function insertionSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];
/**
 * Sorts `arr` with selection-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average and worst-case):** Quadratic (O(n ^ 2)).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export declare function selectionSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];
/**
 * Sorts `arr` with merge-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average and worst-case):** Quasi-linear (O(n * log(n))).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export declare function mergeSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];
/**
 * Sorts `arr` with selection-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best and average):** Quasi-linear (O(n * log(n))).
 *
 * **Time complexity (worst)**: Quadratic (O(n ^ 2)).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export declare function quickSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];
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
export declare function bogoSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];
/**
 * Sorts `arr` with radix-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** O(n * k), where `k` is the number of digits or characters in the
 * largest element.
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export declare function radixSort(arr: number[], opts?: RadixSortOptions): number[];
/**
 * Sorts `arr` with heap-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** Quasi-linear (O(n log n)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export declare function heapSort<T = unknown>(arr: T[], opts?: SortOptions<T>): T[];
