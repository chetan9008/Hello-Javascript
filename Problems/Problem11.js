// Even Odd 


const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number : "));

// if(number % 2 == 0)
// {
//     console.log(`${number} is even`);
// }
// else
//     console.log(`${number} is odd`);

(number % 2 == 0) ? console.log(`${number} is even`) : console.log(`${number} is odd`);