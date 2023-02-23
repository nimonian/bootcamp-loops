const { addNums } = require('../basicLoops')

describe('addNums', () => {

  test('adds the numbers from 1 to 10', () => {
    expect(addNums(10)).toBe(55)
  })

})