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
module.exports = function countingSort(arr, opts) {
	if (opts === void 0) {
		opts = {};
	}
	assertInstanceOf(arr, Array, 'arr');
	assertDefined(opts, 'opts');
	assertTypeOf(opts, 'object');
	var array = __spreadArray([], arr, true);
	var _a = opts.order,
		order = _a === void 0 ? 'ascending' : _a;
	assertOneOf(order, 'opts.order', ['ascending', 'descending']);
	if (array.length === 0) return [];
	var max = Math.max.apply(Math, array);
	for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
		var element = array_1[_i];
		assertTypeOf(element, 'number', 'arr['.concat(arr.indexOf(element), ']'));
	}
	var countingArray = Array(max + 1).fill(0);
	// Step 1: populate the counting array
	for (var _b = 0, array_2 = array; _b < array_2.length; _b++) {
		var element = array_2[_b];
		countingArray[element]++;
	}
	// Step 2: modify the counting array to store the actual position of each element in the sorted array
	for (var i = 1; i <= max; i++) {
		countingArray[i] += countingArray[i - 1];
	}
	// Step 3: Traverse the input array and place the elements in the sorted array
	var sortedArray = Array(array.length);
	for (var i = array.length - 1; i >= 0; i--) {
		var element = array[i];
		var position = countingArray[element] - 1;
		sortedArray[position] = element;
		countingArray[element]--;
	}
	// Step 4: Return the sorted array in the specified order
	return order === 'ascending' ? sortedArray : sortedArray.slice().reverse();
};
