let array = ['chetan','kumar'];

console.log(array);

console.log(...array);

console.log('my','name');

let arrayFirst = {...array};
console.log(arrayFirst);

arrayFirst = [...array,'is','bad'];

console.log(arrayFirst);

arrayFirst = [...array];
arrayFirst.unshift(2);
console.log(arrayFirst);
console.log(array);

let objectFirst = {
    x:1,
    y:2
}
let objectSecond = {
    z:3
}

let object = {objectFirst};
object.a = 22;
console.log(object);
console.log(objectFirst);


let restOperator = (value,...arg)=>
{
    console.log(arg[0]);
    console.log(value);
}

restOperator(2,3);

let restOperatorEx1 = (...arg)=>
{
    console.log(arg);
}
let arr = new Array();
for(let i=1;i<6;i++)
{
    arr.push(i);
}
restOperatorEx1(...arr);