'use strict';
var __spreadArray =
	(this && this.__spreadArray) ||
	function (to, from, pack) {
		if (pack || arguments.length === 2)
			for (var i = 0, l = from.length, ar; i < l; i++) {
				if (ar || !(i in from)) {
					if (!ar) ar = Array.prototype.slice.call(from, 0, i);
					ar[i] = from[i];
				}
			}
		return to.concat(ar || Array.prototype.slice.call(from));
	};
var assertDefined = require('@santi100/assertion-lib/cjs/defined');
var assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
var assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
var assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
var core_1 = require('./core');
function __merge(left, right, comparator) {
	var arr = new Array(left.length + right.length);
	var i = 0,
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
module.exports = function mergeSort(arr, opts) {
	if (opts === void 0) {
		opts = {};
	}
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	var array = __spreadArray([], arr, true);
	var _a = opts.order,
		order = _a === void 0 ? 'ascending' : _a,
		_b = opts.comparator,
		comparator =
			_b === void 0
				? order === 'ascending'
					? core_1.__defAscending
					: core_1.__defDescending
				: _b;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
	for (var size = 1; size < array.length; size *= 2) {
		for (var leftStart = 0; leftStart < array.length; leftStart += 2 * size) {
			var mid = leftStart + size;
			var rightStart = Math.min(leftStart + 2 * size, array.length);
			var left = array.slice(leftStart, mid);
			var right = array.slice(mid, rightStart);
			array.splice.apply(
				array,
				__spreadArray(
					[leftStart, rightStart - leftStart],
					__merge(left, right, comparator),
					false
				)
			);
		}
	}
	return array;
};
