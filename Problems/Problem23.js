//hcf 

const prompt = require('prompt-sync')();

let number1 = parseInt(prompt('Enter the first number : '));
let number2 = parseInt(prompt('Enter the second number : '));

let hcf;
for (let i = 1; i <= number1 && i <= number2; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
console.log(`HCF  of ${number1} and ${number2} is ${hcf}`);

let whileLoop = function (n1, n2) {
    while (n1 != n2) {
        if (n1 > n2)
            n1 -= n2;
        else
            n2 -= n1;
    }
    return n2;
}

console.log(`HCF  of ${number1} and ${number2} is ${whileLoop(number1, number2)}`);

