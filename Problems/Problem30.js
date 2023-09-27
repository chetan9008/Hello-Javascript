const promt = require('prompt-sync')();

let number = promt('enter the number : ');

function factorial(num)
{
    if(num ==0)
    return 1;
    else
    return num * factorial(num -1);
}

console.log(factorial(number));