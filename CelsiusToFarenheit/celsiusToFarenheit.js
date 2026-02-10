function convertCtoF (celsuis) {
    let farenheit = (celsuis * 9/5) + 32;
    return farenheit
}
let celsuis = 30;
let farenheit = convertCtoF(celsuis);
console.log(farenheit);
