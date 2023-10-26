let set1 = new Set([1, 2, 3, 'hello', 'hello']);

set1.add('1');
set1.add(1);

console.log(set1);

console.log(set1.has('hello'));
console.log(set1.values());

set1.delete(1);

console.log(set1);

set1.clear();

console.log(set1);

for (let i = 0; i < 5; i++)
    set1.add(i + 1);

set1.forEach((value) => {
    console.log(value);
})

for (let value of set1) {
    console.log(`value is ${value}`);
}

let weakSet = new WeakSet();

let object = {
    name: 'chetan',
    class: 'bsc'
}
weakSet.add(object)
let object1 = {
    company: 'oreo',
    price: 10
}
weakSet.add(object1)
let object2 = {
    x: 1, y: 2
}
weakSet.add(object2)
weakSet.delete(object2);

console.log(weakSet);

console.log(weakSet.has(object2));


// for(let value of weakSet)
// {
//     console.log(value);
// }


//union 

let union = (f,s) =>
{
    let unionSet = new Set(f);
    for(let value of s)
    {
        unionSet.add(value);
    }
    return unionSet;
}

let intersection = (f,s) =>
{
    let unionSet = new Set();

    for(let value of s)
    {
        if(f.has(value))
        {
            unionSet.add(value);
        }
    }
    return unionSet;
}

let difference = (f,s) =>
{
    let unionSet = new Set(f);

    for(let value of s)
    {
        unionSet.delete(value);
    }
    return unionSet;
}

let subset = (f,s) =>
{
    for(let value of s)
    {
        if(!f.has(value))
        return false;
    }
    return true;
}

let first = new Set([1,2,4,5,3]);
let second = new Set([2,5,3]);

let result = union(first, second);
let result1 = intersection(first, second);
let result2 = difference(first, second);
let result3 = subset(first, second);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);




