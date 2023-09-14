const prompt = require('prompt-sync')();

let base = parseFloat(prompt("Enter the base of traingle : "));
let height = parseFloat(prompt("Enter the height of traingle : "));

let area = (1/2) * base * height;

console.log(`Area of traingle is ${area}`);