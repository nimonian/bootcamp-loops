const {
  evenString
} = require('../challenges')

test('Even String', () => {
  expect(evenString([-4, 8, 7, 0, 11, -100])).toBe('-4 8 0 -100')
})
