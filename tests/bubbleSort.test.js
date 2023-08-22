describe('bubbleSort', () => {
	const bubbleSort = require('../cjs/bubble-sort');
	const unsortedArray = [4, 1, 2, 3];
	const sortedArray = [1, 2, 3, 4];
	const reverseSortedArray = [4, 3, 2, 1];
	const objArray = [
		{ name: 'John', age: 25 },
		{ name: 'Jane', age: 21 },
		{ name: 'Bob', age: 30 }
	];
	const sortedObjArrayByName = [
		{ name: 'Bob', age: 30 },
		{ name: 'Jane', age: 21 },
		{ name: 'John', age: 25 }
	];
	const sortedObjArrayByAge = [
		{ name: 'Jane', age: 21 },
		{ name: 'John', age: 25 },
		{ name: 'Bob', age: 30 }
	];
	describe('error handling', () => {
		test('throws TypeError if "arr" is not an array', () => {
			expect(() => {
				bubbleSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				bubbleSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				bubbleSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
	});

	test('sorts an unsorted array in ascending order', () => {
		expect(bubbleSort([...unsortedArray], { order: 'ascending' })).toEqual(
			sortedArray
		);
	});

	test('sorts an unsorted array in descending order', () => {
		expect(bubbleSort([...unsortedArray], { order: 'descending' })).toEqual(
			reverseSortedArray
		);
	});

	test('sorts an array of objects by name in ascending order', () => {
		expect(
			bubbleSort([...objArray], {
				order: 'ascending',
				comparator: (a, b) => {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				}
			})
		).toEqual(sortedObjArrayByName);
	});

	test('sorts an array of objects by age in descending order', () => {
		expect(
			bubbleSort([...objArray], {
				comparator: (a, b) => b.age - a.age
			})
		).toEqual([...sortedObjArrayByAge].reverse());
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.bubbleSort).toBe(bubbleSort);
	});
});
