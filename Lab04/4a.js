const factorial = function (num) {
    if (num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(5))

function factorialIter(num) {
    let product = 1
    for (let i = 1; i <= num; i++) {
        product *= i
    }
    return product
}
console.log(factorialIter(10))