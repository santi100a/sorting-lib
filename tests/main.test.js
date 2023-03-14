jest.setTimeout(4_000);
describe('Sorting algorithms', () => {
	const comp2 = (a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	};
	const {
		bogoSort,
		bubbleSort,
		insertionSort,
		mergeSort,
		quickSort,
		selectionSort,
		radixSort,
		heapSort,
	} = require('../cjs');
	const unsortedArray = [4, 1, 2, 3];
	const sortedArray = [1, 2, 3, 4];
	const reverseSortedArray = [4, 3, 2, 1];

	const objArray = [
		{ name: 'John', age: 25 },
		{ name: 'Jane', age: 21 },
		{ name: 'Bob', age: 30 },
	];
	const sortedObjArrayByName = [
		{ name: 'Bob', age: 30 },
		{ name: 'Jane', age: 21 },
		{ name: 'John', age: 25 },
	];
	const sortedObjArrayByAge = [
		{ name: 'Jane', age: 21 },
		{ name: 'John', age: 25 },
		{ name: 'Bob', age: 30 },
	];
	describe('bubbleSort', () => {
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
					},
				})
			).toEqual(sortedObjArrayByName);
		});

		test('sorts an array of objects by age in descending order', () => {
			expect(
				bubbleSort([...objArray], {
					comparator: (a, b) => b.age - a.age,
				})
			).toEqual([...sortedObjArrayByAge].reverse());
		});
	});
	describe('insertionSort', () => { 
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
				{ name: 'Bob', age: 30 },
			];
			const expected = [
				{ name: 'Jane', age: 21 },
				{ name: 'John', age: 25 },
				{ name: 'Bob', age: 30 },
			];
			expect(
				insertionSort([...arr], { comparator: (a, b) => a.age - b.age })
			).toEqual(expected);
		});

		test('sorts an array of objects by name in descending order', () => {
			const arr = [
				{ name: 'John', age: 25 },
				{ name: 'Jane', age: 21 },
				{ name: 'Bob', age: 30 },
			];
			const expected = [
				{ name: 'John', age: 25 },
				{ name: 'Jane', age: 21 },
				{ name: 'Bob', age: 30 },
			];
			expect(
				insertionSort([...arr], {
					comparator: (a, b) => b.name.localeCompare(a.name),
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
	});
	describe('selectionSort', () => {
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
					{ name: 'Jane', age: 21 },
				];
				const expected = [
					{ name: 'Bob', age: 30 },
					{ name: 'Jane', age: 21 },
					{ name: 'John', age: 25 },
				];
				expect(selectionSort(arr, { comparator: comp2 })).toEqual(expected);
			});

			test('sorts an array of objects by age in descending order', () => {
				const arr = [
					{ name: 'Bob', age: 30 },
					{ name: 'John', age: 25 },
					{ name: 'Jane', age: 21 },
				];
				const expected = [
					{ name: 'Bob', age: 30 },
					{ name: 'John', age: 25 },
					{ name: 'Jane', age: 21 },
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
	});
	describe('mergeSort', () => {
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
				{ name: 'John', age: 25 },
			];
			const sortedArray = [
				{ name: 'Jane', age: 21 },
				{ name: 'John', age: 25 },
				{ name: 'Bob', age: 30 },
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
				{ name: 'John', age: 25 },
			];
			const sortedArray = [
				{ name: 'John', age: 25 },
				{ name: 'Jane', age: 21 },
				{ name: 'Bob', age: 30 },
			];
			const comparator = (a, b) => b.name.localeCompare(a.name);
			expect(mergeSort([...unsortedArray], { comparator })).toEqual(
				sortedArray
			);
		});
	});
	describe('quickSort', () => {
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
				{ name: 'David', age: 28 },
			];
			const sortedArray = [
				{ name: 'Bob', age: 25 },
				{ name: 'David', age: 28 },
				{ name: 'Alice', age: 30 },
				{ name: 'Charlie', age: 35 },
			];
			const comparator = (a, b) => a.age - b.age;
			expect(quickSort([...unsortedArray], { comparator })).toEqual(
				sortedArray
			);
		});

		test('sorts an array of objects by name in descending order', () => {
			const unsortedArray = [
				{ name: 'Alice', age: 30 },
				{ name: 'Bob', age: 25 },
				{ name: 'Charlie', age: 35 },
				{ name: 'David', age: 28 },
			];
			const sortedArray = [
				{ name: 'David', age: 28 },
				{ name: 'Charlie', age: 35 },
				{ name: 'Bob', age: 25 },
				{ name: 'Alice', age: 30 },
			];
			const comparator = (a, b) => {
				if (a.name < b.name) return 1;
				if (a.name > b.name) return -1;
				return 0;
			};
			expect(
				quickSort([...unsortedArray], { comparator })
			).toEqual(sortedArray);
		});
	});
	describe('bogoSort', () => {
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
			expect(bogoSort(objArray, { comparator: comp2 })).toEqual(
				sortedObjArrayByName
			);
		});
	});
	describe('error handling', () => {
		test('throws an error if array is not an array', () => {
		  expect(() => radixSort('not an array')).toThrow(TypeError);
		});
	  
		test('throws an error if options is not an object', () => {
		  expect(() => radixSort([1, 2, 3], 'not an object')).toThrow(TypeError);
		});
	  
		test('throws an error if order is not "ascending" or "descending"', () => {
		  expect(() => radixSort([1, 2, 3], { order: 'not an order' })).toThrow(TypeError);
		});
	  
		test('throws an error if array contains non-integer values', () => {
		  expect(() => radixSort([1, 2, 3, 'not a number'])).toThrow(TypeError);
		});
	  });
	  describe('heapSort', () => {
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
			{ name: 'Charlie', age: 35 },
		];
		it('sorts an array of numbers in ascending order', () => {
		  const arr = [5, 2, 8, 1, 4];
		  const sorted = heapSort(arr);
		  expect(sorted).toEqual([1, 2, 4, 5, 8]);
		});
	  
		it('sorts an array of numbers in descending order', () => {
		  const arr = [5, 2, 8, 1, 4];
		  const sorted = heapSort(arr, { order: 'descending' });
		  expect(sorted).toEqual([8, 5, 4, 2, 1]);
		});
	  
		it('sorts an array of strings in ascending order', () => {
		  const arr = ['banana', 'apple', 'orange'];
		  const sorted = heapSort(arr);
		  expect(sorted).toEqual(['apple', 'banana', 'orange']);
		});
	  
		it('sorts an array of strings in descending order', () => {
		  const arr = ['banana', 'apple', 'orange'];
		  const sorted = heapSort(arr, { order: 'descending' });
		  expect(sorted).toEqual(['orange', 'banana', 'apple']);
		});
	  
		it('sorts an array of objects in ascending order by age', () => {
		  const arr = people.slice();
		  const sorted = heapSort(arr, {
			comparator: (a, b) => a.age - b.age,
		  });
		  expect(sorted).toEqual([
			{ name: 'Bob', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Charlie', age: 35 },
		  ]);
		});
	  
		it('sorts an array of objects in descending order by age', () => {
		  const arr = people.slice();
		  const sorted = heapSort(arr, {
			comparator: (a, b) => b.age - a.age,
		  });
		  expect(sorted).toEqual([
			{ name: 'Charlie', age: 35 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 25 },
		  ]);
		});
	  });
});
