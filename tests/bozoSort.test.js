describe('bozoSort', () => {
	const bozoSort = require('../cjs/bozo-sort');
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
				bozoSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				bozoSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				bozoSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
	});
	test('it can sort an already sorted array', () => {
		expect(bozoSort(sortedArray)).toEqual(sortedArray);
		expect(bozoSort(sortedArray, { order: 'descending' })).toEqual(
			reverseSortedArray
		);
	});
	test('it can sort an array in both orders', () => {
		expect(bozoSort(unsortedArray)).toEqual(sortedArray);
		expect(bozoSort(unsortedArray, { order: 'ascending' })).toEqual(
			sortedArray
		);
		expect(bozoSort(unsortedArray, { order: 'descending' })).toEqual(
			reverseSortedArray
		);
	});
	test('it can use a custom comparator', () => {
		const comparator = (a, b) => a.age - b.age;
		expect(bozoSort(objArray, { comparator })).toEqual(sortedObjArrayByAge);
		expect(
			bozoSort(objArray, {
				comparator(a, b) {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				}
			})
		).toEqual(sortedObjArrayByName);
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.bozoSort).toBe(bozoSort);
	});
});
