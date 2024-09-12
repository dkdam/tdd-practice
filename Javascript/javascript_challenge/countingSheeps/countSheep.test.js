const countSheeps = require("./countSheep")

test("count arrays of sheeps", () => {
    expect(countSheeps([
        true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true])).toBe(17)
})