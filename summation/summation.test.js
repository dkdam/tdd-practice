const summation = require('./summation')

test('summation formula', () => {
    expect(summation(1)).toEqual(1);
    expect(summation(2)).toEqual(3);
    expect(summation(8)).toEqual(36);
})