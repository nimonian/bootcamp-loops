const {
  stringExcept
} = require('../challenges')

test('String Except', () => {
  expect(stringExcept([1, 3, 2, 3, 3, 3, 4, 3], 3)).toBe('1 2 4')
})
