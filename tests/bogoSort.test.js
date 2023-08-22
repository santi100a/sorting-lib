describe('bogoSort', () => {
	const bogoSort = require('../cjs/bogo-sort');
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
				bogoSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				bogoSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				bogoSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
	});
	test('it can sort an already sorted array', () => {
		expect(bogoSort(sortedArray)).toEqual(sortedArray);
		expect(bogoSort(sortedArray, { order: 'descending' })).toEqual(
			reverseSortedArray
		);
	});
	test('it can sort an array in both orders', () => {
		expect(bogoSort(unsortedArray)).toEqual(sortedArray);
		expect(bogoSort(unsortedArray, { order: 'ascending' })).toEqual(
			sortedArray
		);
		expect(bogoSort(unsortedArray, { order: 'descending' })).toEqual(
			reverseSortedArray
		);
	});
	test('it can use a custom comparator', () => {
		const comparator = (a, b) => a.age - b.age;
		expect(bogoSort(objArray, { comparator })).toEqual(sortedObjArrayByAge);
		expect(
			bogoSort(objArray, {
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
		expect(bigModule.bogoSort).toBe(bogoSort);
	});
});
