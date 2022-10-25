const squareDigits = require('./squareEveryDigits')

test('each digits should to be squared', () => {
    expect(squareDigits(3212)).toBe(9414)
    expect(squareDigits(2112)).toBe(4114)
    expect(squareDigits(0)).toBe(0)
})