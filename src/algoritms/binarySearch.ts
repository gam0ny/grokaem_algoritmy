/**
 * KEYWORDS: Log2(N), Mid-Index
 *
 * IDEA: With binary search, half of the numbers are eliminated each time.
 * SIMPLE SEARCH: N steps
 * BINARY SEARCH: Log2(N) steps
 * IF N = 32
 * SIMPLE SEARCH: 32 steps
 * BINARY SEARCH: Log2(32) = 5 steps
 *
 * Performs binary search in the array of numbers.
 * CONSTRAINT: Array should be sorted.
 *
 * @param sortedArray - The array of numbers.
 * @param valueToFind - Any numeric value to search for.
 * @returns Index of found element, otherwise 'null'
 *
 * @example
 * ```typescript
 * binarySearch([1, 2, 3], 2); // Returns: 1
 * ```
 */

export const binarySearch = (sortedArray: Array<number>, valueToFind: number)
  : null | number => {

  let index = null

  let lowIndex = 0
  let highIndex = sortedArray.length - 1

  while(lowIndex <= highIndex) {

    let middleIndex = Math.round((lowIndex + highIndex) / 2)

    let potentialValue = sortedArray[middleIndex]

    if(potentialValue === valueToFind) {
      index = middleIndex
      break
    }

    if(potentialValue > valueToFind) {
      highIndex = middleIndex - 1
    } else {
      lowIndex = middleIndex + 1
    }
  }

  return index
}
