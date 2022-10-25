const squareDigits = (num) => {
    let array = num.toString().split('').map( function(int) {
        let i = parseInt(int);
        return i * i;
    });

    return parseInt(array.join(""));
}

console.log(squareDigits(3212))

module.exports = squareDigits