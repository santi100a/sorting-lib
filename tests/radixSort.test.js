describe('radixSort', () => {
	const radixSort = require('../cjs/radix-sort');
	describe('error handling', () => {
		test('throws an error if array is not an array', () => {
			expect(() => radixSort('not an array')).toThrow(TypeError);
		});

		test('throws an error if options is not an object', () => {
			expect(() => radixSort([1, 2, 3], 'not an object')).toThrow(TypeError);
		});

		test('throws an error if order is not "ascending" or "descending"', () => {
			expect(() => radixSort([1, 2, 3], { order: 'not an order' })).toThrow(
				TypeError
			);
		});

		test('throws an error if array contains non-integer values', () => {
			expect(() => radixSort([1, 2, 3, 'not a number'])).toThrow(TypeError);
		});
	});
	test('sorts an array of numbers in ascending order', () => {
		const arr = [5, 2, 8, 1, 4];
		const sorted = radixSort(arr);
		expect(sorted).toEqual([1, 2, 4, 5, 8]);
	});

	test('sorts an array of numbers in descending order', () => {
		const arr = [5, 2, 8, 1, 4];
		const sorted = radixSort(arr, { order: 'descending' });
		expect(sorted).toEqual([8, 5, 4, 2, 1]);
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.radixSort).toBe(radixSort);
	});
});
