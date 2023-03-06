const {
  stringRange,
} = require('../challenges')

test('String Range', () => {
  expect(stringRange(-3, 5)).toBe('-3 -2 -1 0 1 2 3 4 5')
})
