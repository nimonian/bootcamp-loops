const {
    stripRed,
    stripGreen,
    stripBlue,
    invert,
    adjustAlpha,
    grayScale
  } = require('../challenge')

describe('stripRed', () => {
    test('should set red to 0', () => {
        const arr = [0.4, 0.8, 0.7, 0.25, 0.2, 0.9, 0.14, 0.5]
        expect.stripRed(arr).toEqual([0, 0.8, 0.7, 0.25, 0, 0.9, 0.14, 0.5])
    })
})

describe('stripGreen', () => {
    test('should set green to 0', () => {
        const arr = [0.4, 0.8, 0.7, 0.25, 0.2, 0.9, 0.14, 0.5]
        expect.stripGreen(arr).toEqual([0.4, 0, 0.7, 0.25, 0.2, 0, 0.14, 0.5])
    })
})

describe('stripBlue', () => {
    test('should set red to 0', () => {
        const arr = [0.4, 0.8, 0.7, 0.25, 0.2, 0.9, 0.14, 0.5]
        expect.stripBlue(arr).toEqual([0, 0.8, 0.7, 0.25, 0, 0.9, 0.14, 0.5])
    })
})
