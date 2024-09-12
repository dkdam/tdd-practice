const isOdd = require('./odds')

test('Check for Odds or Evens', () => {
    expect(isOdd(1,4)).toBe(true)
    expect(isOdd(2,2)).toBe(false)
    expect(isOdd(0,1)).toBe(true)
    expect(isOdd(0,0)).toBe(false)
})