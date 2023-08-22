'use strict';
exports.__esModule = true;
exports.__isInteger =
	exports.__defDescending =
	exports.__reverse =
	exports.__defAscending =
		void 0;
function __defAscending(a, b) {
	// @ts-expect-error It's fine to have "unknown".
	if (a < b) return -1;
	// @ts-expect-error It's fine to have "unknown".
	if (a > b) return 1;
	return 0;
}
exports.__defAscending = __defAscending;
function __reverse(arr) {
	return arr.slice().reverse();
}
exports.__reverse = __reverse;
function __defDescending(a, b) {
	// @ts-expect-error It's fine to have "unknown".
	if (a < b) return 1;
	// @ts-expect-error It's fine to have "unknown".
	if (a > b) return -1;
	return 0;
}
exports.__defDescending = __defDescending;
function __isInteger(num) {
	var _a;
	return (
		((_a = Number === null || Number === void 0 ? void 0 : Number.isInteger) ===
			null || _a === void 0
			? void 0
			: _a.call(Number, num)) ||
		(num < 0 ? Math.ceil(num) : Math.floor(num)) === num
	);
}
exports.__isInteger = __isInteger;
