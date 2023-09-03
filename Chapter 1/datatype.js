const name = 'chetan';
let string = `The string name is ${name}`;
console.log(string);
console.log(3/0);
console.log(-3/6);
console.log(-3/0);
console.log(string/2);
string += 2;
console.log(string);

let bigInteger = 3333n;
console.log(bigInteger + 1n);//big integer

let variable = undefined;
const value = null;

console.log(value);

let firstId = Symbol('1');
let secondId = Symbol('1');

if(firstId == secondId)
console.log('true');
else
console.log('false');

variable = null;
console.log(typeof(variable));