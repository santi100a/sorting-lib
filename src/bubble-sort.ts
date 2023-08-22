import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import { SortOptions, __defAscending, __defDescending } from './core';

/**
 * Sorts `arr` with bubble-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity:** Quadratic (O(n ^ 2)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export = function bubbleSort<T = unknown>(arr: T[], opts: SortOptions<T> = {}) {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	const array = arr.slice();
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending
	} = opts;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (comparator(array[j], array[j + 1]) > 0) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
};
