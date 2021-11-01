const fibonacci = function (n) {
    let a = 0, b = 1, c, i
    if (n === 0) {
        return a
    }
    for (i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }
    return b
}
console.log(fibonacci(10))
console.log(fibonacci(3))
