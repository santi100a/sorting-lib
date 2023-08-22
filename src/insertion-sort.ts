import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import { SortOptions } from './core';
import { __defAscending, __defDescending } from './core';

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
export = function insertionSort<T = unknown>(
	arr: T[],
	opts: SortOptions<T> = {}
) {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	const array = [...arr];
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending
	} = opts;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
	assertTypeOf(comparator, 'function', 'comparator');

	for (let i = 1; i < array.length; i++) {
		const current = array[i];
		let j = i - 1;
		while (j > -1 && comparator(current, array[j]) < 0) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = current;
	}

	return array;
};
