// Variable named kelvin remains constant //
const Kelvin=293;
// Celsius is similar to kelvin //
const Celsius = Kelvin - 273
// equation to calculate fahrenheit, fahrenheit = Celsius * (9/5) + 32 //
let Fahrenheit = Celsius * (9 / 5) + 32;
// built in math object used to round off decimal number resulting from convertion from celsius to fahrenheit // 
Fahrenheit = Math.floor(Fahrenheit)
console.log(`The tempreature is ${Fahrenheit} degrees Fahrenheit.`);
