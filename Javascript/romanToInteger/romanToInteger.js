const romanToInt = (s) => {

    let count = 0
    const num = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    for(let i = 0;i < s.length; i++) {
        if (s[i + 1] && num[s[i]] < num[s[i+1]]) {
            count -= num[s[i]]
        } else {
            count += num[s[i]]
        }
    }

    return count

}

module.exports = romanToInt