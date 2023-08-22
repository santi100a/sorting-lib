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
exports.__esModule = true;
exports.__isSorted = exports.__isInteger = exports.__defDescending = exports.__reverse = exports.__defAscending = void 0;
function __defAscending(a, b) {
    // @ts-expect-error It's fine to have "unknown".
    if (a < b)
        return -1;
    // @ts-expect-error It's fine to have "unknown".
    if (a > b)
        return 1;
    return 0;
}
exports.__defAscending = __defAscending;
function __reverse(arr) {
    return arr.slice().reverse();
}
exports.__reverse = __reverse;
function __defDescending(a, b) {
    // @ts-expect-error It's fine to have "unknown".
    if (a < b)
        return 1;
    // @ts-expect-error It's fine to have "unknown".
    if (a > b)
        return -1;
    return 0;
}
exports.__defDescending = __defDescending;
function __isInteger(num) {
    var _a;
    return (((_a = Number === null || Number === void 0 ? void 0 : Number.isInteger) === null || _a === void 0 ? void 0 : _a.call(Number, num)) ||
        (num < 0 ? Math.ceil(num) : Math.floor(num)) === num);
}
exports.__isInteger = __isInteger;
function __isSorted(arr, comparator) {
    var array = __spreadArray([], arr, true);
    var sorted = true;
    for (var i = 0; i < array.length - 1; i++) {
        if (comparator(array[i + 1], array[i]) < 0) {
            sorted = false;
        }
    }
    return sorted;
}
exports.__isSorted = __isSorted;
