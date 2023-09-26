//sum of natural numbers 

const prompt = require('prompt-sync')();

let range = parseInt(prompt("Enter the last range : "));

let sum = 0;

for(let i=1;i<=range;i++)
{
    sum += i;
}

console.log(`Sum of ${range} numbers is ${sum}`);
console.log(`Sum of ${range} numbers is ${whileLoopIteration(range)}`);


function whileLoopIteration(r)
{
    let sum=0;
    let i=1;
    while(i<=r)
    {
        sum+=i;
        i++;
    }
    return sum;
}