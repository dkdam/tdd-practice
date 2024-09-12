const sumArray = require('./sumArray')

test('sum array removing min and max', () => {
    expect(sumArray(null)).toEqual(0)
    expect(sumArray([])).toEqual(0)
    expect(sumArray([3])).toEqual(0)
    expect(sumArray([3,5])).toEqual(0)
    expect(sumArray([6,2,1,8,10])).toEqual(16)
    expect(sumArray([0,1,6,10,10])).toEqual(17)
    expect(sumArray([-6,-20,-1,-10,-12])).toEqual(-28)
    expect(sumArray([-6,20,-1,10,-12])).toEqual(3)
})