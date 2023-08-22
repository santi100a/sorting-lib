describe('countingSort', () => {
	const countingSort = require('../cjs/counting-sort');
	describe('error handling', () => {
		test('throws TypeError if "arr" is not an array', () => {
			expect(() => {
				countingSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				countingSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				countingSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
		test('throws TypeError if "arr" contains non-numeric values', () => {
			expect(() => {
				countingSort([6, 7, 'hello']);
			}).toThrow(TypeError);
		});
	});
	it('sorts an array of numbers in ascending order', () => {
		const arr = [5, 2, 8, 1, 4];
		const sorted = countingSort(arr);
		expect(sorted).toEqual([1, 2, 4, 5, 8]);
	});

	it('sorts an array of numbers in descending order', () => {
		const arr = [5, 2, 8, 1, 4];
		const sorted = countingSort(arr, { order: 'descending' });
		expect(sorted).toEqual([8, 5, 4, 2, 1]);
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.countingSort).toBe(countingSort);
	});
});
