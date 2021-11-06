let car = {
    brand: 'Toyota',
    model: 'Corolla',
    mpg: 55,

    getLitersPerHundred: function () {
       return ((Math.round((235.214583 / this.mpg) * 100)) / 100) + ' l/100km'
    },
    getFullName: function () {
        return this.brand + ' ' + this.model
    }
}
console.log(car.getLitersPerHundred())
console.log(car.getFullName())