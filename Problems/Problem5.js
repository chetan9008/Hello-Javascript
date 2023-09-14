// Traditional Method 
const promt = require("prompt-sync")();

let first = promt('Enter the first number : ');
let second = promt('Enter the second number : ');

let temp = first;
first = second;
second = temp;

console.log(`Number after swap is \nfirst : ${first} \nsecond : ${second}`);
//Destructive Assignment Method

[first, second] = [second, first]

console.log(`Number after swap is \nfirst : ${first} \nsecond : ${second}`);

//Formula Method or Airthematic Method

first = parseInt(first);
second = parseInt(second);

first = first + second;
second = first - second;
first = first - second;

console.log(`Number after swap is \nfirst : ${first} \nsecond : ${second}`);

//Xor Method 

first = first ^ second;
second = first ^ second;
first = first ^ second;
console.log(`Number after swap is \nfirst : ${first} \nsecond : ${second}`);
