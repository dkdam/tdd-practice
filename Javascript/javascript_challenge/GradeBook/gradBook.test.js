const getGrade = require('./gradBook')

test('grade book', () => {
    expect(getGrade(96,90,93)).toBe('A')
    expect(getGrade(100,85,96)).toBe('A')
    expect(getGrade(70,70,100)).toBe('B')
    expect(getGrade(82,85,87)).toBe('B')
})