const digitalRoot = require('./digitalRoots')

test('Sums all the roots of numbers to a single digit', () => {
    expect(digitalRoot(16)).toBe(7)
    expect(digitalRoot(423)).toBe(9)
    expect(digitalRoot(942)).toBe(6)
    expect(digitalRoot(132189)).toBe(6)
})
