describe('selectionSort', () => {
	const selectionSort = require('../cjs/selection-sort');
	const unsortedArray = [4, 1, 2, 3];
	const sortedArray = [1, 2, 3, 4];
	const reverseSortedArray = [4, 3, 2, 1];
	describe('error handling', () => {
		test('throws TypeError if "arr" is not an array', () => {
			expect(() => {
				selectionSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				selectionSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				selectionSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
	});

	test('sorts an unsorted array', () => {
		expect(selectionSort([...unsortedArray])).toEqual(sortedArray);
	});

	test('returns an already sorted array unchanged', () => {
		expect(selectionSort([...sortedArray])).toEqual(sortedArray);
	});

	test('sorts a reverse sorted array', () => {
		expect(selectionSort([...reverseSortedArray])).toEqual(sortedArray);
	});

	describe('with comparator option', () => {
		test('sorts an array of objects by name in ascending order', () => {
			const arr = [
				{ name: 'Bob', age: 30 },
				{ name: 'John', age: 25 },
				{ name: 'Jane', age: 21 }
			];
			const expected = [
				{ name: 'Bob', age: 30 },
				{ name: 'Jane', age: 21 },
				{ name: 'John', age: 25 }
			];
			expect(
				selectionSort(arr, {
					comparator(a, b) {
						if (a.name < b.name) return -1;
						if (a.name > b.name) return 1;
						return 0;
					}
				})
			).toEqual(expected);
		});

		test('sorts an array of objects by age in descending order', () => {
			const arr = [
				{ name: 'Bob', age: 30 },
				{ name: 'John', age: 25 },
				{ name: 'Jane', age: 21 }
			];
			const expected = [
				{ name: 'Bob', age: 30 },
				{ name: 'John', age: 25 },
				{ name: 'Jane', age: 21 }
			];
			const comparator = (a, b) => b.age - a.age;
			expect(selectionSort(arr, { comparator })).toEqual(expected);
		});
	});

	describe('with order option', () => {
		test('sorts an array in descending order', () => {
			const arr = [1, 4, 3, 2];
			const expected = [4, 3, 2, 1];
			expect(selectionSort(arr, { order: 'descending' })).toEqual(expected);
		});
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.selectionSort).toBe(selectionSort);
	});
});
