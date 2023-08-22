import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import { RadixSortOptions } from './core';
import { __isInteger, __reverse } from './core';

/**
 * Sorts `arr` with radix-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** O(n * k), where `k` is the number of digits or characters
 * in the largest element.
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export = function radixSort(arr: number[], opts: RadixSortOptions = {}) {
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	for (const item of arr) {
		if (!__isInteger(item))
			throw new TypeError(
				`"arr" must be an Array of integers. Item #${arr?.indexOf?.(
					item
				)} of "arr" is "${item}" of type "${typeof item}".`
			);
	}
	let array = [...arr];
	const { order = 'ascending' } = opts;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
	let maxDigits = 0;
	const getNumberOfDigits = (n: number) =>
		Math.floor(Math.log(n) / Math.log(10)) + 1;
	const getDigit = (n: number, p: number) =>
		p >= Math.floor(Math.log(Math.abs(n)) / Math.log(10)) + 1
			? 0
			: Math.floor((Math.abs(n) / Math.pow(10, p)) % 10);

	for (let i = 0; i < array.length; i++) {
		maxDigits = Math.max(maxDigits, getNumberOfDigits(arr[i]));
	}
	for (let i = 0; i < maxDigits; i++) {
		const buckets: number[][] = [[], [], [], [], [], [], [], [], [], []];
		for (let j = 0; j < array.length; j++) {
			const digit = getDigit(arr[j], i);
			buckets[digit].push(arr[j]);
		}
		array = ([] as number[]).concat(...buckets);
	}
	return order === 'ascending' ? array : __reverse(array);
};
