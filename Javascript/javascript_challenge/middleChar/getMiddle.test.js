const getMiddle = require('./getMiddle')

test('returns middle character of strings even is 2 and odd is 1.', () => {
    expect(getMiddle("test")).toBe("es")
    expect(getMiddle("testing")).toBe("t")
    expect(getMiddle("middle")).toBe("dd")
    expect(getMiddle("A")).toBe("A")
})