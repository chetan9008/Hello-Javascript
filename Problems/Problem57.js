let string = 'StrIng';
let anotherString = 'stRinG';

if (string.toLowerCase() === anotherString.toLowerCase()) {
    console.log('same');
}
else {
    console.log('different');
}

let regex = new RegExp(string, 'i');

let result = regex.test(anotherString);
if (result) {
    console.log('same');
}
else {
    console.log('different');
}

result = string.localeCompare(anotherString, undefined,
    {
        sensitivity: 'base'
    })

if(result == 0)
{
    console.log('same');
}
else
{
    console.log('different');
}


