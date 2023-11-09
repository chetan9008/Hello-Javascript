let array = [1,2,3,2,3,5,4,4];


let arr = [];

for(let value of array)
{
    if(arr.includes(value) === false)
    {
        arr.push(value);
    }
}

console.log(arr);


arr = [];

for(let value of array)
{
    if(arr.indexOf(value) === -1)
    {
        arr.push(value);
    }
}

console.log(arr);


arr = [];

arr = [...new Set(array)];

console.log(arr);