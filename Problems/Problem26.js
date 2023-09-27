const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter the range : '));

function naturalNumbersSum(x)
{
    if(x == number)
    {
        return number;
    }
    else
    {
        return x + naturalNumbersSum(x+1);
    }
}
console.log(naturalNumbersSum(1));