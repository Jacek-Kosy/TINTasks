function sortStringAlphabetically(str) {
    str = str.toLowerCase()
    const charArray = str.split('')
    charArray.sort()
    return charArray.join("")
}
console.log(sortStringAlphabetically("Webmaster"))