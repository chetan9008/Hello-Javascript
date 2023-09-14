const promt = require('prompt-sync')();

let km = parseInt(promt("Enter the distance in km : "));
let miles = km * 0.62137119;

console.log(`${km} in miles is ${miles}`);