//positive negative

const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number : "));
if(number == 0)
console.log(`${number} is zero`);
else
if(number < 0)
    console.log(`${number} is negative`);
else
    console.log(`${number} is positive`);
