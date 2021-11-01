function checkType(variable) {
    return typeof variable
}
console.log(checkType(1))
console.log(checkType("Ala"))
console.log(checkType(Array.of(1, 2, 3)))
console.log(checkType(NaN))