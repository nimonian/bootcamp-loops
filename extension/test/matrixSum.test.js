const { matrixSum } = require('../challenges')

test('Matrix Sum', () => {
  expect(
    matrixSum([
      [3, 2],
      [1, 8],
      [11, -2],
    ])
  ).toBe(5 + 9 + 9)
})
