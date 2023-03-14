// ---START TYPES---
/**
 * Comparator function for every sorting algorithm, except for {@link radixSort}.
 * It's fully compatible with {@link Array.prototype.sort}'s callback.
 */
export type SortComparator<T = unknown> = (a: T, b: T) => number;
/**
 * Sorting order string. Must be either `ascending` or `descending`.
 */
export type SortOrder = 'ascending' | 'descending';
/**
 * Shape of the `opts` object passed to every sorting algorithm, except for {@link radixSort}.
 * See {@link RadixSortOptions} for the options specific to it.
 */
export interface SortOptions<T = unknown> {
	/**
	 * Comparator function for every sorting algorithm, except for {@link radixSort}.
	 * It's fully compatible with {@link Array.prototype.sort}'s callback. See {@link SortComparator}.
	 */
	comparator?: SortComparator<T>;
	/**
	 * Sorting order string. Must be either `ascending` or `descending`. See {@link SortOrder}.
	 */
	order?: SortOrder;
}
/**
 * Shape of the `opts` object exclusive to {@link radixSort}.
 * The only thing it overrides is the comparator so it's forcibly `undefined`.
 */
export interface RadixSortOptions extends SortOptions<number> {
	comparator?: never;
}
// ---END TYPES---
// ---START HELPERS---
function __defAscending(a: any, b: any) {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}
function __reverse<T>(arr: T[]): T[] {
	return arr.slice().reverse();
}

function __defDescending(a: any, b: any) {
	if (a < b) return 1;
	if (a > b) return -1;
	return 0;
}
function __isArray(a: any) {
	return Array?.isArray(a) || a instanceof Array;
}
function __isObject(a: any) {
	return typeof a === 'object' && !__isNullOrUndefined(a) && !__isArray(a);
}
function __isNullOrUndefined(a: any) {
	return a === null || a === undefined;
}
function __validateOrder(a: string & SortOrder) {
	if (a === 'ascending' || a === 'descending') return true;
	return false;
}

function __checkErrors<T = unknown>(arr: any[], opts: SortOptions<T>) {
	if (!__isArray(arr))
		throw new TypeError(
			`"arr" must be an Array. Got "${arr}" of type "${typeof arr}".`
		);
	if (!__isObject(opts))
		throw new TypeError(
			`"opts" must be an Object. Got "${opts}" of type "${typeof opts}".`
		);
	if (
		!__isNullOrUndefined(opts.order) &&
		!__validateOrder(opts.order as SortOrder)
	)
		throw new TypeError(
			`"opts.order", if specified, must be one of "ascending" or "descending". Got "${opts.order}".`
		);
}
function __isInteger(num: number) {
	return (
		Number?.isInteger?.(num) ||
		(num < 0 ? Math.ceil(num) : Math.floor(num)) === num
	);
}
// ---END HELPERS---
/**
 * Sorts `arr` with bubble-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity:** Quadratic (O(n ^ 2)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export function bubbleSort<T = unknown>(arr: T[], opts: SortOptions<T> = {}) {
	__checkErrors<T>(arr, opts);
	const array = [...arr];
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending,
	} = opts;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (comparator(array[j], array[j + 1]) > 0) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
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
export function insertionSort<T = unknown>(
	arr: T[],
	opts: SortOptions<T> = {}
) {
	__checkErrors<T>(arr, opts);
	const array = [...arr];
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending,
	} = opts;

	for (let i = 1; i < array.length; i++) {
		let current = array[i];
		let j = i - 1;
		while (j > -1 && comparator(current, array[j]) < 0) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = current;
	}

	return array;
}
/**
 * Sorts `arr` with selection-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average and worst-case):** Quadratic (O(n ^ 2)).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export function selectionSort<T = unknown>(
	arr: T[],
	opts: SortOptions<T> = {}
) {
	__checkErrors<T>(arr, opts);
	const array = [...arr];
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending,
	} = opts;
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
export function mergeSort<T = unknown>(
	arr: T[],
	opts: SortOptions<T> = {}
): T[] {
	__checkErrors<T>(arr, opts);
	const array = [...arr];
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending,
	} = opts;

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
}

function __merge<T>(left: T[], right: T[], comparator: SortComparator<T>): T[] {
	let arr = new Array(left.length + right.length);
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
export function quickSort<T = unknown>(arr: T[], opts: SortOptions<T> = {}) {
	__checkErrors<T>(arr, opts);
	const array = [...arr];
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending,
	} = opts;

	const stack: number[] = [0, array.length - 1];

	while (stack.length > 0) {
		const end = stack.pop() as number;
		const start = stack.pop() as number;

		if (start >= end) {
			continue;
		}

		let pivotIndex = __partition(array, start, end);

		stack.push(start, pivotIndex - 1);
		stack.push(pivotIndex + 1, end);
	}
	function __partition(arr: unknown[], start: number, end: number) {
		function __swap(arr: unknown[], a: number, b: number) {
			const temp = arr[a];
			arr[a] = arr[b];
			arr[b] = temp;
		}

		let pivotValue = arr[end];
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
}

/**
 * Sorts `arr` with bogo-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average):** Linear-factorial (O(n * n!)).
 *
 * **Worst-case time complexity:** Infinity (O(∞)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export function bogoSort<T = unknown>(arr: T[], opts: SortOptions<T> = {}) {
	__checkErrors<T>(arr, opts);
	const {
		order = 'ascending',
		comparator = order === 'ascending' ? __defAscending : __defDescending,
	} = opts;
	function __shuffle(arr: T[]) {
		const array = [...arr];
		let m = array.length,
			t,
			i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}
	function __isSorted(arr: T[]) {
		const array = [...arr];
		let sorted = true;
		for (let i = 0; i < array.length - 1; i++) {
			if (comparator(array[i + 1], array[i]) < 0) {
				sorted = false;
			}
		}
		return sorted;
	}
	let array = [...arr];

	while (!__isSorted(array)) array = __shuffle(array);
	return array;
}

/**
 * Sorts `arr` with radix-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** O(n * k), where `k` is the number of digits or characters in the
 * largest element.
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export function radixSort(arr: number[], opts: RadixSortOptions = {}) {
	__checkErrors<number>(arr, opts);
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
			let digit = getDigit(arr[j], i);
			buckets[digit].push(arr[j]);
		}
		array = ([] as number[]).concat(...buckets);
	}
	return order === 'ascending' ? array : __reverse(array);
}

/**
 * Sorts `arr` with heap-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** Quasi-linear (O(n log n)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
export function heapSort<T = unknown>(arr: T[], opts: SortOptions<T> = {}) {
	__checkErrors(arr, opts);
	const { comparator = __defAscending, order = 'ascending' } = opts;
	const n = arr.length;

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
}