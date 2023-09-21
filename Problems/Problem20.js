// simple calculator 

const prompt = require('prompt-sync')();

let operator = prompt('Enter the operator');

let firstNumber = prompt("Enter the first number : ");
let secondNumber = prompt("Enter the second number : ");
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
// if (operator == '+')
//     console.log(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
// else if (operator == '-')
//     console.log(`substraction of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
// else if (operator == '/')
//     console.log(`Division of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`);
// else if (operator == '*')
//     console.log(`Multiplication of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
// else
//     console.log('Please Enter valid operator');

switch (operator) {
    case '+':
        console.log(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
        break;
    case '-':
        console.log(`substraction of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
        break;
    case '/':
        console.log(`Division of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`);
        break;
    case '*':
        console.log(`Multiplication of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
        break;
    default:
        console.log('Please Enter valid operator');
}