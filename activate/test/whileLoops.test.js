const {
  powerOf2,
  squareLimit,
  sumLimit,
  repeatLimit,
} = require("../whileLoops");

describe('powerOf2', () => {

    test('finds the power of 2 smaller than 100', () => {
        expect(powerOf2(100)).toBe(64)
    })

})

describe('squareLimit', () => {

    test('finds the square smaller than 99', () => {
        expect(squareLimit(99)).toBe(81)
    })

})

describe('sumLimit', () => {

    test('finds the consecutive sum smaller than 350', () => {
        expect(sumLimit(350)).toBe(25)
    })

})

describe('repeatLimit', () => {

    test('finds the biggest string not longer than 30', () => {
        expect(repeatLimit('cheese')).toBe('cheesecheesecheesecheesecheese')
    })

})
