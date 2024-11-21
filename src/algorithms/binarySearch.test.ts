import { binarySearch } from './binarySearch'

const testCases = [
  { sortedArray: [1, 2, 3], valueToFind: 2, expected: 1 },
  { sortedArray: [1, 2, 3, 4, 5, 6], valueToFind: 5, expected: 4 },
  { sortedArray: [1, 3, 5, 7, 9], valueToFind: 3, expected: 1 },
]

test.each(testCases)('calculateArea($sortedArray, $valueToFind) should return $expected',
  ({ sortedArray, valueToFind, expected }) => {
  const result = binarySearch(sortedArray, valueToFind)

  expect(result).toEqual(expected)
})
