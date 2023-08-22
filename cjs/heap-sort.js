'use strict';
var assertDefined = require('@santi100/assertion-lib/cjs/defined');
var assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
var assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
var assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
var core_1 = require('./core');
module.exports = function heapSort(arr, opts) {
	if (opts === void 0) {
		opts = { comparator: core_1.__defAscending, order: 'ascending' };
	}
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	var _a = opts.comparator,
		comparator = _a === void 0 ? core_1.__defAscending : _a,
		_b = opts.order,
		order = _b === void 0 ? 'ascending' : _b;
	var n = arr.length;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
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
};
