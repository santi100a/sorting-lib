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
var shuffle = require('@santi100/array-shuffle');
var core_1 = require('./core');
module.exports = function bogoSort(arr, opts) {
	if (opts === void 0) {
		opts = {};
	}
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
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
	while (!__isSorted(array)) array = shuffle(array);
	return array;
};
