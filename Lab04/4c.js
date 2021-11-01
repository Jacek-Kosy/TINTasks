function reverse(str) {
    return (str === "") ? "" : reverse(str.substr(1)) + str.charAt(0)
}
function isPalindrome(str) {
    const rev = reverse(str)
    return str === rev
}
console.log(isPalindrome("radar"))
console.log(isPalindrome("dog"))
