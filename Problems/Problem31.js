const prompt  = require('prompt-sync')();

let decimal = parseInt(prompt('Enter the decimal number : '));
let rem;
let binary = 0;
let temp =1 ;
for(let i=0;i<10;i++)
{
    rem = decimal % 2;
    decimal = parseInt(decimal / 2);
    binary = binary + rem * temp;
    temp = temp * 10;
    if(decimal ==0)
    break;
}
console.log(binary);
