const numberOfSteps = require('./numberOfSteps')

test('return the number of steps to reduce it to zero', () => {
    expect(numberOfSteps(14)).toEqual(6)
    expect(numberOfSteps(8)).toEqual(4)
    expect(numberOfSteps(123)).toEqual(12)
})