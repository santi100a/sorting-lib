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
module.exports = function radixSort(arr, opts) {
	var _a;
	var _b;
	if (opts === void 0) {
		opts = {};
	}
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
		var item = arr_1[_i];
		if (!(0, core_1.__isInteger)(item))
			throw new TypeError(
				'"arr" must be an Array of integers. Item #'
					.concat(
						(_b = arr === null || arr === void 0 ? void 0 : arr.indexOf) ===
							null || _b === void 0
							? void 0
							: _b.call(arr, item),
						' of "arr" is "'
					)
					.concat(item, '" of type "')
					.concat(typeof item, '".')
			);
	}
	var array = __spreadArray([], arr, true);
	var _c = opts.order,
		order = _c === void 0 ? 'ascending' : _c;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
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
	return order === 'ascending' ? array : (0, core_1.__reverse)(array);
};
