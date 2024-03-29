import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import shuffle = require('@santi100/array-shuffle');
import { SortOptions, __defAscending, __defDescending, __isSorted } from './core';

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
export = function bogoSort<T = unknown>(arr: T[], opts: SortOptions<T> = {}) {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending
	} = opts;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
	
	let array = [...arr];
	
	while (!__isSorted(array, comparator)) array = shuffle(array);
	return array;
};
