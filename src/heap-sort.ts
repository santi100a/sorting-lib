import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');

import { SortComparator, SortOptions, SortOrder } from './core';
import { __defAscending } from './core';

/**
 * Sorts `arr` with heap-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** Quasi-linear (O(n log n)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export = function heapSort<T = unknown>(
	arr: T[],
	opts: SortOptions<T> = { comparator: __defAscending, order: 'ascending' }
) {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	const { comparator = __defAscending, order = 'ascending' } = opts;
	const n = arr.length;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);

	// build heap
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		__heapify(arr, i, n, comparator, order);
	}

	// extract elements from heap
	for (let i = n - 1; i > 0; i--) {
		__swap(arr, 0, i);
		__heapify(arr, 0, i, comparator, order);
	}

	function compare<T>(
		a: T,
		b: T,
		comparator: SortComparator<T>,
		order: SortOrder
	) {
		const cmp = comparator(a, b);
		return order === 'ascending' ? cmp : -cmp;
	}

	function __swap<T>(arr: T[], i: number, j: number) {
		const tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	function __heapify<T>(
		arr: T[],
		i: number,
		n: number,
		comparator: SortComparator<T>,
		order: SortOrder
	) {
		let largest = i;
		const left = 2 * i + 1;
		const right = 2 * i + 2;

		if (left < n && compare(arr[left], arr[largest], comparator, order) > 0) {
			largest = left;
		}

		if (right < n && compare(arr[right], arr[largest], comparator, order) > 0) {
			largest = right;
		}

		if (largest !== i) {
			__swap(arr, i, largest);
			__heapify(arr, largest, n, comparator, order);
		}
	}
	return arr;
};
