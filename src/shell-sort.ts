import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');

import { SortOptions } from './core';
import { __defAscending, __defDescending } from './core';

/**
 * Sorts `arr` with shell-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity:** Depends on the gap sequence used. Best known is O(n log^2 n).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export = function shellSort<T = unknown>(arr: T[], opts: SortOptions<T> = {}) {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	const array = arr.slice();
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending
	} = opts;
	const len = array.length;
	let gap = Math.floor(len / 2);
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);

	while (gap > 0) {
		for (let i = gap; i < len; i++) {
			const temp = array[i];
			let j = i;

			while (j >= gap && comparator(array[j - gap], temp) > 0) {
				array[j] = array[j - gap];
				j -= gap;
			}
			array[j] = temp;
		}
		gap = Math.floor(gap / 2);
	}
	return array.slice();
};
