'use strict';
var assertDefined = require('@santi100/assertion-lib/cjs/defined');
var assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
var assertOneOf = require('@santi100/assertion-lib/cjs/one-of');
var assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
var core_1 = require('./core');
module.exports = function bubbleSort(arr, opts) {
	if (opts === void 0) {
		opts = {};
	}
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	var array = arr.slice();
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
};
