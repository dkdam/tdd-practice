const maximumWealth = (accounts) => {
    let max = 0
    for (let ClientAccount of accounts) {
        let clientSum = ClientAccount.reduce((a,b) => {
            return a + b
        })
        max = (max < clientSum) ? clientSum : max
        
    }
    return max
}

module.exports = maximumWealth