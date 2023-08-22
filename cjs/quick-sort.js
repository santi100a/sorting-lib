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
var assertDefined = require("@santi100/assertion-lib/cjs/defined");
var assertInstanceOf = require("@santi100/assertion-lib/cjs/instance-of");
var assertOneOf = require("@santi100/assertion-lib/cjs/one-of");
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
var core_1 = require("./core");
module.exports = function quickSort(arr, opts) {
    if (opts === void 0) { opts = {}; }
    assertInstanceOf(arr, Array, 'arr');
    assertDefined(opts, 'opts');
    assertTypeOf(opts, 'object');
    var array = __spreadArray([], arr, true);
    var _a = opts.order, order = _a === void 0 ? 'ascending' : _a, _b = opts.comparator, comparator = _b === void 0 ? order === 'ascending' ? core_1.__defAscending : core_1.__defDescending : _b;
    assertOneOf(order, 'opts.order', ['ascending', 'descending']);
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
};
