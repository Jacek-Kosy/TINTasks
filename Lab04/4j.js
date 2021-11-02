function binarySearch(arr, target) {
    let middleElement = Math.floor(arr.length / 2)
    if (arr.length === 1) {
        return arr[middleElement] === target ? middleElement : null
    } else if (arr[middleElement] === target) {
        return middleElement
    } else {
        if (arr[middleElement] < target) {
            let response = binarySearch(arr.slice(middleElement), target)
            return middleElement + response
        } else {
            return binarySearch(arr.slice(0, middleElement), target)
        }
    }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7))