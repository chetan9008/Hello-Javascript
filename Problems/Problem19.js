const prompt = require('prompt-sync')();

let lowerLimit = parseInt(prompt("Enter the lower limit : "));
let upperLimit = parseInt(prompt('Enter the upper limit : '));

for(let i=lowerLimit;i<=upperLimit;i++)
{
    let size = i.toString().length;
    let sum =0;
    let rem;
    let temp = i;
    let number = i;
    while(number > 0)
    {
        rem = number % 10;
        number = parseInt(number/10);
        sum += rem ** size;
    }
    if(sum == temp)
    {
        console.log(`${i} is armstrong number`);
    }
}