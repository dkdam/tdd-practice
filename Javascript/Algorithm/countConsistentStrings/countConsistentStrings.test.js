const countConsistentStrings = require("./countConsistentStrings")

test("Count the number of consistent strings", () => {
    expect(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"])).toBe(2)
    expect(countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"])).toBe(7)
    expect(countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"])).toBe(4)
})