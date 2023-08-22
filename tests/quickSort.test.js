describe('quickSort', () => {
	const quickSort = require('../cjs/quick-sort');
	describe('error handling', () => {
		test('throws TypeError if "arr" is not an array', () => {
			expect(() => {
				quickSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				quickSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				quickSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
	});
	const arrayWithDuplicates = [3, 2, 2, 1, 3, 4];
	const expectedArrayWithDuplicates = [1, 2, 2, 3, 3, 4];

	test('sorts an array with duplicate values', () => {
		expect(quickSort([...arrayWithDuplicates])).toEqual(
			expectedArrayWithDuplicates
		);
	});

	test('sorts an array of objects by age in ascending order', () => {
		const unsortedArray = [
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 25 },
			{ name: 'Charlie', age: 35 },
			{ name: 'David', age: 28 }
		];
		const sortedArray = [
			{ name: 'Bob', age: 25 },
			{ name: 'David', age: 28 },
			{ name: 'Alice', age: 30 },
			{ name: 'Charlie', age: 35 }
		];
		const comparator = (a, b) => a.age - b.age;
		expect(quickSort([...unsortedArray], { comparator })).toEqual(sortedArray);
	});

	test('sorts an array of objects by name in descending order', () => {
		const unsortedArray = [
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 25 },
			{ name: 'Charlie', age: 35 },
			{ name: 'David', age: 28 }
		];
		const sortedArray = [
			{ name: 'David', age: 28 },
			{ name: 'Charlie', age: 35 },
			{ name: 'Bob', age: 25 },
			{ name: 'Alice', age: 30 }
		];
		const comparator = (a, b) => {
			if (a.name < b.name) return 1;
			if (a.name > b.name) return -1;
			return 0;
		};
		expect(quickSort([...unsortedArray], { comparator })).toEqual(sortedArray);
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.quickSort).toBe(quickSort);
	});
});
