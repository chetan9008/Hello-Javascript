let object = {
    name:'chetan',
    class:'bsc',
    marks:{
        maths:90,
        computer:99
    }
}
let count =0;
for(let key in object)
{
    count++;
    if(typeof object[key] === 'object')
    {
        for(let innerKey in object[key])
        count++;
    }
}
console.log(`the no of keys is ${count}`);
console.log(Object.keys(object).length);