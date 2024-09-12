const numberOfSteps = (num) => {
    let steps = 0

    while(num > 0) {
        if( num % 2 === 0) {
            num /= 2
            steps++
        } else {
            num--
            steps++
        }
    }

    return steps
}

module.exports = numberOfSteps