let promt = require('prompt-sync')();

let age = promt("Enter your age : ");
let name = promt("Enter your name : ");

console.log(`Your Name is ${name}\nYour Age is ${age}`);