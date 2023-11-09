let array = [1,2,3,2,1,2,3,2];

let anotherArray= [4,5,6,4,5,6,4,5,6,5];

let concatenatedArray = array.concat(anotherArray);

concatenatedArray = [...new Set(concatenatedArray)];
console.log(concatenatedArray);

concatenatedArray = [];

concatenatedArray = [...array,...anotherArray];

function removeDuplicate(arr)
{
    let array = [];
    for(let value of arr)
    {
        if(array.includes(value) == false
        )
        {
            array.push(value);
        }
    }
    return array;
}

concatenatedArray = removeDuplicate(concatenatedArray);

console.log(concatenatedArray);