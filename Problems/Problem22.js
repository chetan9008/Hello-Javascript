//Checking last digit of number

const prompt = require('prompt-sync')();

let number1 = (prompt("Enter the first number : "));
let number2 = (prompt("Enter the second number : "));

number1 = parseInt(number1);
number2 = parseInt(number2);

let lastdigit1 = number1 % 10;
let lastdigit2 = number2 % 10;
if(lastdigit1 === lastdigit2)
{
    console.log('Last digit same');
}
else
{
    console.log('Last digit not same');
}