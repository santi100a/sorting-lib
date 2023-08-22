import { SortOptions } from './core';
/**
 * Sorts an array using the Bozo Sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param {T[]} array The array to be sorted.
 */
declare function bozoSort<T = unknown>(array: T[]): T[];
/**
 * Sorts an array using the Bozo Sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param {T[]} array The array to be sorted.
 * @param {SortOptions} [opts] An object containing sorting options.
 */
declare function bozoSort<T = unknown>(array: T[], opts: SortOptions<T>): T[];
export = bozoSort;
