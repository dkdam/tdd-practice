const removeSmallest = (number) => {
    let low = { "num": Infinity, 
                "idx": 0 }
    for(let i = 0; i < number.length; i++){
        if(number[i] < low["num"]){
            low["num"] = number[i]
            low["idx"] = i
        }
    }
    return number.slice(0,low["idx"]).concat(number.slice(low["idx"] + 1)) 
}

module.exports = removeSmallest