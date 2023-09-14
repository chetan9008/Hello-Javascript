const prompt = require('prompt-sync')();

let celsius = prompt("Enter temperature is celsius : ");

let fahrenheit = (celsius *1.8 ) + 32;

console.log(`The temperature in fahrenheit is ${fahrenheit}`);