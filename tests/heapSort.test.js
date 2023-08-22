describe('heapSort', () => {
	const heapSort = require('../cjs/heap-sort');
	describe('error handling', () => {
		test('throws TypeError if "arr" is not an array', () => {
			expect(() => {
				heapSort('not an array', {});
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts" is not an object', () => {
			expect(() => {
				heapSort([], 'not an object');
			}).toThrow(TypeError);
		});

		test('throws TypeError if "opts.order" is not valid', () => {
			expect(() => {
				heapSort([], { order: 'invalid' });
			}).toThrow(TypeError);
		});
	});
	const people = [
		{ name: 'Alice', age: 30 },
		{ name: 'Bob', age: 25 },
		{ name: 'Charlie', age: 35 }
	];
	test('sorts an array of numbers in ascending order', () => {
		const arr = [5, 2, 8, 1, 4];
		const sorted = heapSort(arr);
		expect(sorted).toEqual([1, 2, 4, 5, 8]);
	});

	test('sorts an array of numbers in descending order', () => {
		const arr = [5, 2, 8, 1, 4];
		const sorted = heapSort(arr, { order: 'descending' });
		expect(sorted).toEqual([8, 5, 4, 2, 1]);
	});

	test('sorts an array of strings in ascending order', () => {
		const arr = ['banana', 'apple', 'orange'];
		const sorted = heapSort(arr);
		expect(sorted).toEqual(['apple', 'banana', 'orange']);
	});

	test('sorts an array of strings in descending order', () => {
		const arr = ['banana', 'apple', 'orange'];
		const sorted = heapSort(arr, { order: 'descending' });
		expect(sorted).toEqual(['orange', 'banana', 'apple']);
	});

	test('sorts an array of objects in ascending order by age', () => {
		const arr = people.slice();
		const sorted = heapSort(arr, {
			comparator: (a, b) => a.age - b.age
		});
		expect(sorted).toEqual([
			{ name: 'Bob', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Charlie', age: 35 }
		]);
	});

	test('sorts an array of objects in descending order by age', () => {
		const arr = people.slice();
		const sorted = heapSort(arr, {
			comparator: (a, b) => b.age - a.age
		});
		expect(sorted).toEqual([
			{ name: 'Charlie', age: 35 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 25 }
		]);
	});
	test('code splitting', () => {
		const bigModule = require('..');
		expect(bigModule.heapSort).toBe(heapSort);
	});
});
