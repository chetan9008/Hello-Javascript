//factor of number
const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter the number : '));

for(let i=1;i<=number;i++)
{
    if(number % i == 0)
    console.log(`${i} is factor of ${number}`);
}