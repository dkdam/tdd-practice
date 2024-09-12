const countConsistentStrings = (allowed,words) => {
    const isAllowed = (word) => {
        for(let c of word)
        if(!allowed.has(c))
            return false;
        return true
    }
    
    let consistent = 0
    allowed = new Set(allowed)

    for(let word of words)
        consistent += isAllowed(word)

    return consistent
}


module.exports = countConsistentStrings