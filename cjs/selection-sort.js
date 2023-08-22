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
module.exports = function selectionSort(arr, opts) {
	var _a;
	if (opts === void 0) {
		opts = {};
	}
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	var array = __spreadArray([], arr, true);
	var _b = opts.order,
		order = _b === void 0 ? 'ascending' : _b,
		_c = opts.comparator,
		comparator =
			_c === void 0
				? order === 'ascending'
					? core_1.__defAscending
					: core_1.__defDescending
				: _c;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
	for (var i = 0; i < array.length; i++) {
		var min = i;
		for (var j = i + 1; j < array.length; j++) {
			if (comparator(array[j], array[min]) < 0) {
				min = j;
			}
		}
		if (min !== i) {
			(_a = [array[min], array[i]]), (array[i] = _a[0]), (array[min] = _a[1]);
		}
	}
	return array;
};
