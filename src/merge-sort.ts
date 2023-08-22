import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import { SortComparator, SortOptions } from './core';
import { __defAscending, __defDescending } from './core';

function __merge<T>(left: T[], right: T[], comparator: SortComparator<T>): T[] {
	const arr = new Array(left.length + right.length);
	let i = 0,
		j = 0,
		k = 0;
	while (i < left.length && j < right.length) {
		if (comparator(left[i], right[j]) < 0) {
			arr[k++] = left[i++];
		} else {
			arr[k++] = right[j++];
		}
	}
	while (i < left.length) {
		arr[k++] = left[i++];
	}
	while (j < right.length) {
		arr[k++] = right[j++];
	}
	return arr;
}

/**
 * Sorts `arr` with merge-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average and worst-case):** Quasi-linear (O(n * log(n))).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export = function mergeSort<T = unknown>(
	arr: T[],
	opts: SortOptions<T> = {}
): T[] {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	const array = [...arr];
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending
	} = opts;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);

	for (let size = 1; size < array.length; size *= 2) {
		for (let leftStart = 0; leftStart < array.length; leftStart += 2 * size) {
			const mid = leftStart + size;
			const rightStart = Math.min(leftStart + 2 * size, array.length);
			const left = array.slice(leftStart, mid);
			const right = array.slice(mid, rightStart);

			array.splice(
				leftStart,
				rightStart - leftStart,
				...__merge(left, right, comparator)
			);
		}
	}

	return array;
};
