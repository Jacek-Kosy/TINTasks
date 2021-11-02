function getSecondNumbers(arr) {
    arr = arr.sort()
    if (arr.length === 0) {
        return []
    } else if (arr.length === 1) {
        return [arr[0], arr[0]]
    } else if (arr.length === 2) {
        return [arr[1], arr[0]]
    } else if(arr.length === 3) {
        return [arr[1], arr[1]]
    } else {
        return [arr[1], arr[arr.length - 2]]
    }
}
console.log(getSecondNumbers([1, 5, 3, 4, 9]))
console.log(getSecondNumbers([2, 4, 6]))
console.log(getSecondNumbers([1, 5]))
console.log(getSecondNumbers([15]))
console.log(getSecondNumbers([]))
