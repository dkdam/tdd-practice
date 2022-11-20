const doubleChar = require("./doubleChar")

test("return each character string with double", () => {
    expect(doubleChar("String")).toBe("SSttrriinngg")
    expect(doubleChar("Hello World")).toBe("HHeelllloo  WWoorrlldd")
    expect(doubleChar("1234!_ ")).toBe("11223344!!__  ")
})