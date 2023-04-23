const getMiddle = (s) => {
    if (s.length < 2) {
        return s
    }
    if (s.length % 2) {
        for (let i = 0; i < s.length; i++) {
            if ( i == (s.length - 1) / 2) {
                return s[i]
            }
        }
    } else {
        for (let i = 0; i < s.length; i++) {
            if ( i == (s.length) / 2) {
                return s[i - 1] + s[i ]
            }
        }
    }
}

module.exports = getMiddle