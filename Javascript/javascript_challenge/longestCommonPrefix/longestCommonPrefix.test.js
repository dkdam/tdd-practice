const longestCommonPrefix = require('./longestCommonPrefix')

test('Find the long prefixes in the array', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
})