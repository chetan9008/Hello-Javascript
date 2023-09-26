//lcm 

const prompt = require('prompt-sync')();

let number1 = parseInt(prompt('Enter the first number : '));
let number2 = parseInt(prompt('Enter the second number : '));

let max = (number1 > number2) ? number1:number2;

while(true)
{
    if(max % number1 ==0 && max % number2 ==0)
    {
        console.log(`LCM of ${number1} and ${number2} is ${max}`);
        break;
    }
    max++;
}

function hcf(n1,n2)
{
    let h;
    for(let i=1;i<=n1 && i<=n2;i++)
    {
        if(n1 % i ==0 && n2 %i ==0)
        {
            h = i;
        }
    }
    return h;
}


let lcm = number1 * number2 / hcf(number1,number2);

console.log(`lcm by hcf is ${lcm}`);