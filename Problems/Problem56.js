let string = 'he is fuck you';

let substring = 'he is c';

if(string.includes(substring))
{
    console.log(`string contains ${substring}`);
}
else
{
    console.log(`string don't contains ${substring}`);
}

if(string.indexOf(substring) !== -1)
{
    console.log(`string contains ${substring}`);
}
else
{
    console.log(`string don't contains ${substring}`);
}