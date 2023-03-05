const {
  addNums,
  addNums2,
  addEvens,
  numberString
} = require('../basicLoops')

describe('addNums', () => {

  test('adds the numbers from 1 to 10', () => {
    expect(addNums(10)).toBe(55)
  })

})

describe('addNums2', () => {

  test('adds the numbers from 100 to 200', () => {
    expect(addNums2(100, 200)).toBe(15150)
  })

})

describe('addEvens', () => {

  test('adds the even numbers from 1 to 9', () => {
    expect(addEvens(1, 9)).toBe(20)
  })

  test('adds the even numbers from 2 to 9', () => {
    expect(addEvens(2, 9)).toBe(20)
  })

  test('adds the even numbers from 1 to 10', () => {
    expect(addEvens(1, 10)).toBe(30)
  })

  test('adds the even numbers from 2 to 10', () => {
    expect(addEvens(2, 10)).toBe(30)
  })

})

describe('numberString', () => {

  test('concatenates the numbers from 1 to 15 in a string', () => {
    expect(numberString(15)).toBe('123456789101112131415')
  })

})
