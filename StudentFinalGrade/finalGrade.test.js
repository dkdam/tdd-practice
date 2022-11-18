const finalGrade = require("./finalGrade")

test('return final grades', () => {
    expect(finalGrade(100,12)).toEqual(100)
    expect(finalGrade(99,0)).toEqual(100)
    expect(finalGrade(85,5)).toEqual(90)
    expect(finalGrade(55,0)).toEqual(0)
    expect(finalGrade(20,2)).toEqual(0)
})