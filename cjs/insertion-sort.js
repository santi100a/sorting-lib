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
module.exports = function insertionSort(arr, opts) {
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
	assertTypeOf(comparator, 'function', 'comparator');
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
};
