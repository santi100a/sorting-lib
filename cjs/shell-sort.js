"use strict";
var assertDefined = require("@santi100/assertion-lib/cjs/defined");
var assertInstanceOf = require("@santi100/assertion-lib/cjs/instance-of");
var assertOneOf = require("@santi100/assertion-lib/cjs/one-of");
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
var core_1 = require("./core");
module.exports = function shellSort(arr, opts) {
    if (opts === void 0) { opts = {}; }
    assertInstanceOf(arr, Array, 'arr');
    assertDefined(opts, 'opts');
    assertTypeOf(opts, 'object');
    var array = arr.slice();
    var _a = opts.order, order = _a === void 0 ? 'ascending' : _a, _b = opts.comparator, comparator = _b === void 0 ? order === 'ascending' ? core_1.__defAscending : core_1.__defDescending : _b;
    var len = array.length;
    var gap = Math.floor(len / 2);
    assertOneOf(order, 'opts.order', ['ascending', 'descending']);
    while (gap > 0) {
        for (var i = gap; i < len; i++) {
            var temp = array[i];
            var j = i;
            while (j >= gap && comparator(array[j - gap], temp) > 0) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return array.slice();
};
