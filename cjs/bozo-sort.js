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
var core_1 = require("./core");
var randomIntegers = require("@santi100/random-lib/cjs/random-integers");
var assertArray = require("@santi100/assertion-lib/cjs/array");
var assertDefined = require("@santi100/assertion-lib/cjs/defined");
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
var assertOneOf = require("@santi100/assertion-lib/cjs/one-of");
function bozoSort(array, opts) {
    var _a;
    if (opts === void 0) { opts = {
        order: 'ascending',
        comparator: core_1.__defAscending
    }; }
    var arr = __spreadArray([], array, true);
    assertArray(array, 'array');
    assertDefined(opts, 'opts');
    assertTypeOf(opts, 'object', 'opts');
    var _b = opts.order, order = _b === void 0 ? 'ascending' : _b, _c = opts.comparator, comparator = _c === void 0 ? order === 'ascending' ? core_1.__defAscending : core_1.__defDescending : _c;
    assertTypeOf(order, 'string', 'order');
    assertOneOf(order, 'order', ['ascending', 'descending']);
    assertTypeOf(comparator, 'function', 'comparator');
    while (!(0, core_1.__isSorted)(arr, comparator)) {
        var _d = randomIntegers(2, { max: array.length, min: 0 }), i = _d[0], j = _d[1];
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1]; // swap
    }
    return arr;
}
module.exports = bozoSort;
