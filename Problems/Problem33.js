const prompt = require('prompt-sync')();

let string = prompt('Enter the string');

function builtIntFunction() {
    let array;

    array = string.split("");

    array = array.reverse();

    array = array.join("");

    if (array == string) {
        console.log(`${string} is pallindrome`);
    }
    else {
        console.log(`${string} is not pallindrome`);

    }
}

function IterativeApproch(string)
{
    for(let i=0;i<string.length / 2 ;i++)
    {
        if(string[i] !== string[string.length -1 -i])
        {
            return false;
        }
    }
    return true;
}

let result = IterativeApproch(string);
if(result)
console.log('Pallindrome');
else
console.log('Not Pallindrome');
