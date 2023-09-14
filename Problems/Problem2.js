const promt = require('prompt-sync')();

let first = parseInt(promt("Enter the first number : "));
let second = parseInt(promt("Enter the second number : "));

let sum = first + second;

console.log(`Sum of ${first} and ${second} is ${sum}`);