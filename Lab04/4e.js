function findLongestWord(str) {
    let wordArray = str.split(" ")
    wordArray = wordArray.sort(function (a, b) {
        return b.length - a.length
    })
    return wordArray[0]
}
console.log(findLongestWord("W Szczebrzeszynie chrząszcz brzmi w trzcinie"))
console.log(findLongestWord("Ala ma kota"))