let string = 'sunil';
let vowels = ['a','e','o','u','i'];

let regex = /[aeoui]/gi;
let count = string.match(regex,string).length;
console.log(count);

function iterativeApproch(string)
{
    let count = 0;
    for(let value of string.toLowerCase())
    {
        if(vowels.includes(value))
        count++;
    }
    return count;
}

console.log(iterativeApproch(string));