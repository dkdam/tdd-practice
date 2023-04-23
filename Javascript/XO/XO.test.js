const XO = require('./XO')

test('Check if strings has same amount of Xs or Os', () => {
    expect(XO("ooxx")).toEqual(true)
    expect(XO("xooxx")).toEqual(false)
    expect(XO("ooxXm")).toEqual(true)
    expect(XO("zpzpzpp")).toEqual(true) // when no 'x' and 'o' is present should return true
    expect(XO("zzoo")).toEqual(false)
})
