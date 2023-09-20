//factorial 
const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter the number : "));

if (number == 0)
    console.log(`The factorial is 0`);
else {
    let factorial = number;
    while (number != 1) {
        factorial *= (number - 1);
        number--;
    }
    console.log(`Factorial is ${BigInt(factorial)}`);
}
