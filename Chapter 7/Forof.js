
let map = new Map();

map.set('name','chetan');
map.set('class','bsc');

for(let value of map)
{
    console.log(value);
}

let array = [1,2,3,4];

console.log('value of array');

for(let value of array)
{
    console.log(value);
}

console.log('value of string');

for(let character of map.get('name'))
{
    console.log(character);
}

let set = new Set([2,5,21,1,6,88,3]);

console.log('value of set');

for(let value of set)
{
    console.log(value);
}

console.log('iterate through map');

for(let [key,value] of map)
{
    console.log(`Key is ${key}\t Value is ${value}`);
}

for(let value in set)
{
    console.log(value);
}