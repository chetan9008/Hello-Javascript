const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number : "));

let count = false;
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        count = true;
    }
}
if (count == true)
    console.log(`${number} is not prime`);
else
    console.log(`${number} is prime`);
