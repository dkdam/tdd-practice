const isOdd = (flower1, flower2) => {
    const num = flower1 + flower2

    if (num % 2 == 0) {
        return false
    } else {
        return true
    }
}

module.exports =isOdd