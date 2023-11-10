let arrayObject = [{name:'chetan',age:21},{name:'bhuvan',age:0},{name:'aman',age:22}];


let compareName = (a,b)=>
{
    let first = a.name.toUpperCase();
    let second = b.name.toUpperCase();

    if(first < second)
    {
        return -1;
    }
    else if(first > second)
    {
        return 1;
    }

    return 0;
}


let array = arrayObject.sort(compareName);
console.log(array);


let compareAge = (a,b)=>
{
    return a.age - b.age;
}

array = arrayObject.sort(compareAge);
console.log(array);