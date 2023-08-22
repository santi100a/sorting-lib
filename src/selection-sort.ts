import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import { SortOptions } from './core';
import { __defAscending, __defDescending } from './core';

/**
 * Sorts `arr` with selection-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average and worst-case):** Quadratic (O(n ^ 2)).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export = function selectionSort<T = unknown>(
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
	for (let i = 0; i < array.length; i++) {
		let min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (comparator(array[j], array[min]) < 0) {
				min = j;
			}
		}
		if (min !== i) {
			[array[i], array[min]] = [array[min], array[i]];
		}
	}
	return array;
};
