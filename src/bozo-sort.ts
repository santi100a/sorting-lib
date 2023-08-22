import {
	SortOptions,
	SortOrder,
	__defAscending,
	__defDescending,
	__isSorted
} from './core';
import randomIntegers = require('@santi100/random-lib/cjs/random-integers');
import assertArray = require('@santi100/assertion-lib/cjs/array');
import assertDefined = require('@santi100/assertion-lib/cjs/defined');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
/**
 * Sorts an array using the Bozo Sort algorithm.
 * 
 * @template T The type of elements in the array.
 * @param {T[]} array The array to be sorted.
 */
function bozoSort<T = unknown>(array: T[]): T[];
/**
 * Sorts an array using the Bozo Sort algorithm.
 * 
 * @template T The type of elements in the array.
 * @param {T[]} array The array to be sorted.
 * @param {SortOptions} [opts] An object containing sorting options.
 */
function bozoSort<T = unknown>(array: T[], opts: SortOptions<T>): T[];

function bozoSort<T = unknown>(
	array: T[],
	opts: SortOptions = {
		order: 'ascending',
		comparator: __defAscending
	}
): T[] {
	const arr = [...array];
	assertArray(array, 'array');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object', 'opts');
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending
	} = opts;
	assertTypeOf(order, 'string', 'order');
	assertOneOf(order, 'order', ['ascending', 'descending'] as SortOrder[]);
	assertTypeOf(comparator, 'function', 'comparator');
	while (!__isSorted(arr, comparator)) {
		const [i, j] = randomIntegers(2, { max: array.length, min: 0 });
		[arr[i], arr[j]] = [arr[j], arr[i]]; // swap
	}
	return arr;
}

export = bozoSort;
