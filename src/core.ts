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
	 *
	 * **Keep in mind this option overrides the `order` option.**
	 */
	comparator?: SortComparator<T>;
	/**
	 * Sorting order string. Must be either `ascending` or `descending`. See {@link SortOrder}.
	 */
	order?: SortOrder;
}
/**
 * Shape of the `opts` object exclusive to {@link radixSort}.
 */
export interface RadixSortOptions {
	/**
	 * Sorting order string. Must be either `ascending` or `descending`. See {@link SortOrder}.
	 */
	order?: SortOrder;
}
/**
 * Shape of the `opts` object exclusive to {@link countingSort}.
 * @since 0.0.3
 */
export type CountingSortOptions = RadixSortOptions;
export function __defAscending(a: unknown, b: unknown) {
	// @ts-expect-error It's fine to have "unknown".
	if (a < b) return -1;
	// @ts-expect-error It's fine to have "unknown".
	if (a > b) return 1;
	return 0;
}
export function __reverse<T>(arr: T[]): T[] {
	return arr.slice().reverse();
}

export function __defDescending(a: unknown, b: unknown) {
	// @ts-expect-error It's fine to have "unknown".
	if (a < b) return 1;
	// @ts-expect-error It's fine to have "unknown".
	if (a > b) return -1;
	return 0;
}

export function __isInteger(num: number) {
	return (
		Number?.isInteger?.(num) ||
		(num < 0 ? Math.ceil(num) : Math.floor(num)) === num
	);
}
