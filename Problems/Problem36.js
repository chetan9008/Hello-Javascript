let string = 'Chetan is chutiya';

let array = string.split('');

array = array.reverse();

array = array.join('');

console.log('Reseved string is ' + array);


function reverseString(string)
{
    let newString = "";

    for(let i=string.length - 1;i>=0;i--)
    {
        newString += string[i];
    }

    return newString;
}

console.log(reverseString(string));