//Armstrong number
const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter the three digit number : "));
let size = number.toString().length;
let originalNumber = number;
let rem,sum=0;

// for(let i=0;i<3;i++)
while(number > 0)
{
    rem = number % 10;
    number = parseInt(number / 10);
    sum += rem ** size;
}
if(originalNumber == sum)
{
    console.log(`${originalNumber} is armstrong number`);
}
else
{
    console.log(`${originalNumber} is not armstrong number`);
}