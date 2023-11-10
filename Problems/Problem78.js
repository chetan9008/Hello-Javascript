let array = [{ a: 1, b: 2, c: 3 },
{ a: 11, b: 22, c: 33 },
    { a: 1111, b: 2222, c: 3333 }]

function extract(arr,key)
{
    // return arr.map((obj)=>
    // {   
    //     return obj[key];
    // })

    return arr.map(object => object[key])

}

let result = extract(array,'a');
console.log(result);

function extract2(arr,key)
{
    let array = [];

    for(let value of arr)
    {
        array.push(value[key]);
    }
    return array;
}

let result2 = extract2(array,'b');

console.log(result2);

