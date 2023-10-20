
let x = ()=>{
    console.log('hello world');
}
x();

const function_y  = (x,y=3)=>
{
    console.log(`value of x is ${x} and y is ${y}`);
}

function_y(2);

let add = (x,y) => x+y;

console.log(add(4,5.3));

let Object1 = function()
{
    this.name = 'chetan';
    this.class= 'bsc';
}

let object = new Object1();

console.log(object);

function array(x,y,...rest)
{
    console.log(x);
    console.log(y);
    console.log(...rest);
}

array('1', '2', '3', '4', '5', '6', '7', '8');

let object1 = {...object};
console.log(object1);

let array1 = [1,2,3,4];
let array2 = [...array1,5,6,7,8];

function show(value)
{
    console.log(value);
}

array2.forEach(show);