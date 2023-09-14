const prompt = require('prompt-sync')();

let number = parseFloat(prompt("Enter any number"));

let squareRoot = Math.sqrt(number);

console.log(`Square root of ${number} is ${squareRoot}`);