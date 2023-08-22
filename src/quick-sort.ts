import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import { SortOptions, __defAscending, __defDescending } from './core';

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
export = function quickSort<T = unknown>(arr: T[], opts: SortOptions<T> = {}) {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	const array = [...arr];
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending
	} = opts;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);

	const stack: number[] = [0, array.length - 1];

	while (stack.length > 0) {
		const end = stack.pop() as number;
		const start = stack.pop() as number;

		if (start >= end) {
			continue;
		}

		const pivotIndex = __partition(array, start, end);

		stack.push(start, pivotIndex - 1);
		stack.push(pivotIndex + 1, end);
	}
	function __partition(arr: unknown[], start: number, end: number) {
		function __swap(arr: unknown[], a: number, b: number) {
			const temp = arr[a];
			arr[a] = arr[b];
			arr[b] = temp;
		}

		const pivotValue = arr[end];
		let partitionIndex = start;

		for (let i = start; i < end; i++) {
			if (comparator(arr[i] as T, pivotValue as T) < 0) {
				__swap(arr, i, partitionIndex);
				partitionIndex++;
			}
		}

		__swap(arr, end, partitionIndex);
		return partitionIndex;
	}

	return array;
};
