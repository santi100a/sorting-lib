import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import { CountingSortOptions } from './core';

/**
 * Sorts `arr` with counting-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worse):** O(n + k), where k is the range of
 * input (maximum element - minimum element + 1).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export = function countingSort(arr: number[], opts: CountingSortOptions = {}) {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	const array = [...arr];
	const { order = 'ascending' } = opts;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
	if (array.length === 0) return [];
	const max = Math.max(...array);
	for (const element of array)
		assertTypeOf(element, 'number', `arr[${arr.indexOf(element)}]`);

	const countingArray = Array(max + 1).fill(0);

	// Step 1: populate the counting array

	for (const element of array) {
		countingArray[element]++;
	}

	// Step 2: modify the counting array to store the actual position of each element in the sorted array
	for (let i = 1; i <= max; i++) {
		countingArray[i] += countingArray[i - 1];
	}

	// Step 3: Traverse the input array and place the elements in the sorted array
	const sortedArray = Array(array.length);
	for (let i = array.length - 1; i >= 0; i--) {
		const element = array[i];
		const position = countingArray[element] - 1;
		sortedArray[position] = element;
		countingArray[element]--;
	}

	// Step 4: Return the sorted array in the specified order
	return order === 'ascending' ? sortedArray : sortedArray.slice().reverse();
};
