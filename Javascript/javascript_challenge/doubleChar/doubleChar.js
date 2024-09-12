const doubleChar = (str) => {
    let double = ""

    for (const char of str) {
        double += char + char
    }

    return double
}

module.exports = doubleChar