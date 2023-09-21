//Multiplication Table

const promt = require('prompt-sync')();

let number = parseInt(promt("Enter the number : "));

let array = [1,2,3,4,5,6,7,8,9,10];

for(let i of array)
{
    console.log(`${number} * ${i} = ${number*i}`);
}