const input = require('prompt-sync')();

let string = input('Enter the string : ');

function capital(string)
{
    let newString = string[0].toUpperCase() + string.slice(1);
    return newString;
}
let capitalString = capital(string);
console.log(capitalString);

function regexCapital(string)
{
    let newString = string.replace(/^./, string[0].toUpperCase());//^ is used for beginning and . is used for no of words
    // let newString = string.replace(string[0],string[0].toUpperCase());
    return newString;
}
console.log(regexCapital(string));