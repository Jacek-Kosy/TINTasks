function divideIntoCoins(amount, denominationArray) {
    let result = []
    for (let i = denominationArray.length - 1; i >= 0; i--) {
        let currentDenomination = denominationArray[i]
        let denominationCount = Math.floor(amount / currentDenomination)
        for (let j = 0; j < denominationCount; j++) {
            result.push(currentDenomination)
        }
        amount -= (currentDenomination * denominationCount)
    }
    return result

}
console.log(divideIntoCoins(46, [1, 2, 5, 10, 25]))
console.log(divideIntoCoins(137, [1, 2, 5, 10, 25, 50]))