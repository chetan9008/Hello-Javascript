let Greet = function()
{
    console.log('hi there');
}

let student = 21;

import { greet } from "./export.js";
greet('gaurav');

import { add,name } from "./export.js";

console.log(add(2, 3));

console.log(`Your name is ${name}`);

import { GreetFunction } from "./export.js";


GreetFunction();

import { student as newStudent } from "./export.js";

console.log(newStudent);

import javascript from "./export.js";

javascript();