const prompt = require('prompt-sync')();

let operator = prompt("Enter the opertor : ");

let a = parseFloat(prompt("enter the first element : "));
let b = parseFloat(prompt("enter the second element : "));

switch (operator) {
    case '+++':
        console.log(`The addition of ${a} and ${b} is ${a + b}`);
        break;
    case '-':
        console.log(`The substraction of ${a} and ${b} is ${a - b}`);
        break;
    case '*':
        console.log(`The multiplication of ${a} and ${b} is ${a * b}`);
        break;
    case '/':
        console.log(`The division of ${a} and ${b} is ${a / b}`);
        break;
    default:
        console.log("Please enter the valid opertor");
        break;
}