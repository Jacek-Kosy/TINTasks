function convertToCelsius(tempInFahrenheit) {
    temperature = parseFloat(tempInFahrenheit)
    document.getElementById("celsius").value = Math.round((((temperature - 32) / 1.8) + Number.EPSILON) * 100) / 100
}
function convertToFahrenheit(tempInCelsius) {
    temperature = parseFloat(tempInCelsius)
    document.getElementById("fahrenheit").value = Math.round(((temperature * 1.8 + 32) + Number.EPSILON) * 100) / 100
}
function convertTemperature() {
    if (document.getElementById("cToF").checked) {
        convertToFahrenheit(document.getElementById("celsius").value)
    } else if (document.getElementById("fToC").checked) {
        convertToCelsius(document.getElementById("fahrenheit").value)
    }
}