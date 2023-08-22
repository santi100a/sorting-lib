describe('mergeSort', () => {
	const mergeSort = require('../cjs/merge-sort');
	describe('error handling', () => {
		test('throws TypeError if "arr" is not an array', () => {
			expect(() => {
				mergeSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				mergeSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				mergeSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
	});

	test('sorts an array of strings in ascending order', () => {
		const unsortedArray = ['cat', 'dog', 'ant', 'elephant'];
		const sortedArray = ['ant', 'cat', 'dog', 'elephant'];
		expect(mergeSort([...unsortedArray])).toEqual(sortedArray);
	});

	test('sorts an array of objects by age in ascending order', () => {
		const unsortedArray = [
			{ name: 'Bob', age: 30 },
			{ name: 'Jane', age: 21 },
			{ name: 'John', age: 25 }
		];
		const sortedArray = [
			{ name: 'Jane', age: 21 },
			{ name: 'John', age: 25 },
			{ name: 'Bob', age: 30 }
		];
		const compareFunction = (a, b) => a.age - b.age;
		expect(
			mergeSort([...unsortedArray], { comparator: compareFunction })
		).toEqual(sortedArray);
	});

	test('sorts an array of objects by name in descending order', () => {
		const unsortedArray = [
			{ name: 'Bob', age: 30 },
			{ name: 'Jane', age: 21 },
			{ name: 'John', age: 25 }
		];
		const sortedArray = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 21 },
			{ name: 'Bob', age: 30 }
		];
		const comparator = (a, b) => b.name.localeCompare(a.name);
		expect(mergeSort([...unsortedArray], { comparator })).toEqual(sortedArray);
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.mergeSort).toBe(mergeSort);
	});
});
