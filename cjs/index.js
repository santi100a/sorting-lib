"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.heapSort = exports.radixSort = exports.bogoSort = exports.quickSort = exports.mergeSort = exports.selectionSort = exports.insertionSort = exports.bubbleSort = void 0;
// ---END TYPES---
// ---START HELPERS---
function __defAscending(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
function __reverse(arr) {
    return arr.slice().reverse();
}
function __defDescending(a, b) {
    if (a < b)
        return 1;
    if (a > b)
        return -1;
    return 0;
}
function __isArray(a) {
    return (Array === null || Array === void 0 ? void 0 : Array.isArray(a)) || a instanceof Array;
}
function __isObject(a) {
    return typeof a === 'object' && !__isNullOrUndefined(a) && !__isArray(a);
}
function __isNullOrUndefined(a) {
    return a === null || a === undefined;
}
function __validateOrder(a) {
    if (a === 'ascending' || a === 'descending')
        return true;
    return false;
}
function __checkErrors(arr, opts) {
    if (!__isArray(arr))
        throw new TypeError("\"arr\" must be an Array. Got \"".concat(arr, "\" of type \"").concat(typeof arr, "\"."));
    if (!__isObject(opts))
        throw new TypeError("\"opts\" must be an Object. Got \"".concat(opts, "\" of type \"").concat(typeof opts, "\"."));
    if (!__isNullOrUndefined(opts.order) &&
        !__validateOrder(opts.order))
        throw new TypeError("\"opts.order\", if specified, must be one of \"ascending\" or \"descending\". Got \"".concat(opts.order, "\"."));
}
function __isInteger(num) {
    var _a;
    return (((_a = Number === null || Number === void 0 ? void 0 : Number.isInteger) === null || _a === void 0 ? void 0 : _a.call(Number, num)) ||
        (num < 0 ? Math.ceil(num) : Math.floor(num)) === num);
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
function bubbleSort(arr, opts) {
    if (opts === void 0) { opts = {}; }
    __checkErrors(arr, opts);
    var array = __spreadArray([], arr, true);
    var _a = opts.order, order = _a === void 0 ? 'ascending' : _a, _b = opts.comparator, comparator = _b === void 0 ? order === 'ascending' ? __defAscending : __defDescending : _b;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (comparator(array[j], array[j + 1]) > 0) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
exports.bubbleSort = bubbleSort;
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
function insertionSort(arr, opts) {
    if (opts === void 0) { opts = {}; }
    __checkErrors(arr, opts);
    var array = __spreadArray([], arr, true);
    var _a = opts.order, order = _a === void 0 ? 'ascending' : _a, _b = opts.comparator, comparator = _b === void 0 ? order === 'ascending' ? __defAscending : __defDescending : _b;
    for (var i = 1; i < array.length; i++) {
        var current = array[i];
        var j = i - 1;
        while (j > -1 && comparator(current, array[j]) < 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}
exports.insertionSort = insertionSort;
/**
 * Sorts `arr` with selection-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average and worst-case):** Quadratic (O(n ^ 2)).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
function selectionSort(arr, opts) {
    var _a;
    if (opts === void 0) { opts = {}; }
    __checkErrors(arr, opts);
    var array = __spreadArray([], arr, true);
    var _b = opts.order, order = _b === void 0 ? 'ascending' : _b, _c = opts.comparator, comparator = _c === void 0 ? order === 'ascending' ? __defAscending : __defDescending : _c;
    for (var i = 0; i < array.length; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (comparator(array[j], array[min]) < 0) {
                min = j;
            }
        }
        if (min !== i) {
            _a = [array[min], array[i]], array[i] = _a[0], array[min] = _a[1];
        }
    }
    return array;
}
exports.selectionSort = selectionSort;
/**
 * Sorts `arr` with merge-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (average and worst-case):** Quasi-linear (O(n * log(n))).
 *
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
function mergeSort(arr, opts) {
    if (opts === void 0) { opts = {}; }
    __checkErrors(arr, opts);
    var array = __spreadArray([], arr, true);
    var _a = opts.order, order = _a === void 0 ? 'ascending' : _a, _b = opts.comparator, comparator = _b === void 0 ? order === 'ascending' ? __defAscending : __defDescending : _b;
    for (var size = 1; size < array.length; size *= 2) {
        for (var leftStart = 0; leftStart < array.length; leftStart += 2 * size) {
            var mid = leftStart + size;
            var rightStart = Math.min(leftStart + 2 * size, array.length);
            var left = array.slice(leftStart, mid);
            var right = array.slice(mid, rightStart);
            array.splice.apply(array, __spreadArray([leftStart,
                rightStart - leftStart], __merge(left, right, comparator), false));
        }
    }
    return array;
}
exports.mergeSort = mergeSort;
function __merge(left, right, comparator) {
    var arr = new Array(left.length + right.length);
    var i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length) {
        if (comparator(left[i], right[j]) < 0) {
            arr[k++] = left[i++];
        }
        else {
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
function quickSort(arr, opts) {
    if (opts === void 0) { opts = {}; }
    __checkErrors(arr, opts);
    var array = __spreadArray([], arr, true);
    var _a = opts.order, order = _a === void 0 ? 'ascending' : _a, _b = opts.comparator, comparator = _b === void 0 ? order === 'ascending' ? __defAscending : __defDescending : _b;
    var stack = [0, array.length - 1];
    while (stack.length > 0) {
        var end = stack.pop();
        var start = stack.pop();
        if (start >= end) {
            continue;
        }
        var pivotIndex = __partition(array, start, end);
        stack.push(start, pivotIndex - 1);
        stack.push(pivotIndex + 1, end);
    }
    function __partition(arr, start, end) {
        function __swap(arr, a, b) {
            var temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
        var pivotValue = arr[end];
        var partitionIndex = start;
        for (var i = start; i < end; i++) {
            if (comparator(arr[i], pivotValue) < 0) {
                __swap(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        __swap(arr, end, partitionIndex);
        return partitionIndex;
    }
    return array;
}
exports.quickSort = quickSort;
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
function bogoSort(arr, opts) {
    if (opts === void 0) { opts = {}; }
    __checkErrors(arr, opts);
    var _a = opts.order, order = _a === void 0 ? 'ascending' : _a, _b = opts.comparator, comparator = _b === void 0 ? order === 'ascending' ? __defAscending : __defDescending : _b;
    function __shuffle(arr) {
        var array = __spreadArray([], arr, true);
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
    function __isSorted(arr) {
        var array = __spreadArray([], arr, true);
        var sorted = true;
        for (var i = 0; i < array.length - 1; i++) {
            if (comparator(array[i + 1], array[i]) < 0) {
                sorted = false;
            }
        }
        return sorted;
    }
    var array = __spreadArray([], arr, true);
    while (!__isSorted(array))
        array = __shuffle(array);
    return array;
}
exports.bogoSort = bogoSort;
/**
 * Sorts `arr` with radix-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** O(n * k), where `k` is the number of digits or characters in the
 * largest element.
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
function radixSort(arr, opts) {
    var _a;
    var _b;
    if (opts === void 0) { opts = {}; }
    __checkErrors(arr, opts);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (!__isInteger(item))
            throw new TypeError("\"arr\" must be an Array of integers. Item #".concat((_b = arr === null || arr === void 0 ? void 0 : arr.indexOf) === null || _b === void 0 ? void 0 : _b.call(arr, item), " of \"arr\" is \"").concat(item, "\" of type \"").concat(typeof item, "\"."));
    }
    var array = __spreadArray([], arr, true);
    var _c = opts.order, order = _c === void 0 ? 'ascending' : _c;
    var maxDigits = 0;
    var getNumberOfDigits = function (n) {
        return Math.floor(Math.log(n) / Math.log(10)) + 1;
    };
    var getDigit = function (n, p) {
        return p >= Math.floor(Math.log(Math.abs(n)) / Math.log(10)) + 1
            ? 0
            : Math.floor((Math.abs(n) / Math.pow(10, p)) % 10);
    };
    for (var i = 0; i < array.length; i++) {
        maxDigits = Math.max(maxDigits, getNumberOfDigits(arr[i]));
    }
    for (var i = 0; i < maxDigits; i++) {
        var buckets = [[], [], [], [], [], [], [], [], [], []];
        for (var j = 0; j < array.length; j++) {
            var digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        array = (_a = []).concat.apply(_a, buckets);
    }
    return order === 'ascending' ? array : __reverse(array);
}
exports.radixSort = radixSort;
/**
 * Sorts `arr` with heap-sort and returns a new sorted array (i.e.: doesn't mutate `arr`).
 *
 * **Time complexity (best, average and worst):** Quasi-linear (O(n log n)).
 * @param arr The array to sort.
 * @param opts Sorting options. See {@link SortOptions}.
 * @returns A sorted copy of `arr`.
 */
function heapSort(arr, opts) {
    if (opts === void 0) { opts = {}; }
    __checkErrors(arr, opts);
    var _a = opts.comparator, comparator = _a === void 0 ? __defAscending : _a, _b = opts.order, order = _b === void 0 ? 'ascending' : _b;
    var n = arr.length;
    // build heap
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        __heapify(arr, i, n, comparator, order);
    }
    // extract elements from heap
    for (var i = n - 1; i > 0; i--) {
        __swap(arr, 0, i);
        __heapify(arr, 0, i, comparator, order);
    }
    function compare(a, b, comparator, order) {
        var cmp = comparator(a, b);
        return order === 'ascending' ? cmp : -cmp;
    }
    function __swap(arr, i, j) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    function __heapify(arr, i, n, comparator, order) {
        var largest = i;
        var left = 2 * i + 1;
        var right = 2 * i + 2;
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
exports.heapSort = heapSort;
