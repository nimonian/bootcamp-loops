const { fibonacciSum } = require('../challenges')

test('Fibonacci Sum', () => {
  expect(fibonacciSum(50)).toBe(32951280098)
})
