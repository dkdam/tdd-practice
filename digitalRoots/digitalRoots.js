const digitalRoot = (num) => {
    let digit = num.toString().split('').map(Number)
    let sum = 0

    for (let i = 0; i < digit.length; i++ ) {
        sum += digit[i]
    }

    let sumString = sum.toString()
    if (sumString.length > 1) {
        let sumDigits = sumString.split('').map(Number)
        let firstDigit = sumDigits.slice(0)
        let lastDigit = sumDigits.slice(-1)

        return firstDigit[0] + lastDigit[0]
    } else {
        return sum
    }

}

module.exports = digitalRoot