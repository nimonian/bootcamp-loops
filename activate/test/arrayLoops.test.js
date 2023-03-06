const {
    addArray,
    addEvens,
    countEvens,
    longestWord
  } = require('../arrayLoops')

describe('addArray', () => {
    
    test('adds the numbers in the array', () => {
        expect(addArray([2, 5, 7, 3]).toBe(17))
    })

})

describe('addEvens', () => {

    test('adds only the even numbers', () => {
        expect(addEvens([2, 3, 12, 9])).toBe(14)
    })

})

describe('countEvens', () => {

    test('counts how many even numbers', () => {
        expect(countEvens([2, 5, 6, 1, 7, 8, 9, 20])).toBe(4)
    })

})

describe('longestWord', () => {

    test('returns the longest word', () => {
        expect(longestWord(['the', 'night', 'was', 'dark', 'as', 'an', 'inkwell'])).toBe('inkwell')
    })

})
