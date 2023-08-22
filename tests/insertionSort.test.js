describe('insertionSort', () => {
	const insertionSort = require('../cjs/insertion-sort');
	const unsortedArray = [4, 1, 2, 3];
	const sortedArray = [1, 2, 3, 4];
	const reverseSortedArray = [4, 3, 2, 1];

	describe('error handling', () => {
		test('throws TypeError if "arr" is not an array', () => {
			expect(() => {
				insertionSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				insertionSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				insertionSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
	});

	test('sorts an unsorted array', () => {
		expect(insertionSort([...unsortedArray])).toEqual(sortedArray);
	});

	test('returns an already sorted array unchanged', () => {
		expect(insertionSort([...sortedArray])).toEqual(sortedArray);
	});

	test('sorts a reverse sorted array', () => {
		expect(insertionSort([...reverseSortedArray])).toEqual(sortedArray);
	});

	test('sorts an array of objects by age in ascending order', () => {
		const arr = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 21 },
			{ name: 'Bob', age: 30 }
		];
		const expected = [
			{ name: 'Jane', age: 21 },
			{ name: 'John', age: 25 },
			{ name: 'Bob', age: 30 }
		];
		expect(
			insertionSort([...arr], { comparator: (a, b) => a.age - b.age })
		).toEqual(expected);
	});

	test('sorts an array of objects by name in descending order', () => {
		const arr = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 21 },
			{ name: 'Bob', age: 30 }
		];
		const expected = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 21 },
			{ name: 'Bob', age: 30 }
		];
		expect(
			insertionSort([...arr], {
				comparator: (a, b) => b.name.localeCompare(a.name)
			})
		).toEqual(expected);
	});

	test('sorts an array of strings in ascending order by length', () => {
		const arr = ['abcd', 'ab', 'a', 'abc'];
		const expected = ['a', 'ab', 'abc', 'abcd'];
		expect(
			insertionSort([...arr], { comparator: (a, b) => a.length - b.length })
		).toEqual(expected);
	});

	test('sorts an array of strings in descending order by alphabetical order', () => {
		const arr = ['foo', 'bar', 'baz', 'alice'];
		const expected = ['foo', 'baz', 'bar', 'alice'];
		expect(
			insertionSort([...arr], { comparator: (a, b) => b.localeCompare(a) })
		).toEqual(expected);
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.insertionSort).toBe(insertionSort);
	});
});
