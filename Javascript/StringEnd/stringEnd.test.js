const stringEnd = require('./stringEnd')

test('returns true if the first argument passed in ends with the 2nd argument.', () => {
    expect(stringEnd('abcde','cde')).toBe(true)
    expect(stringEnd('abcde','abc')).toBe(false)
})