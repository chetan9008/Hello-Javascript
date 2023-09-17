const promt = require('prompt-sync')();

// let number = promt("Enter any number ");

// if (number % 2 == 0)
//     console.log(`${number} is even`);
// else
//     console.log(`${number} is odd`);

// (number % 2 == 0) ? console.log(`${number} is even`) : console.log(`${number} is odd`);

let a, b, c;
a = promt("Enter a");
b = promt("Enter b");
c = promt("Enter c");
if (a > b) {
    (a > c) ? console.log(`${a} is gretest`) : console.log(`${c} is gretest`);
}
else {
    (b > c) ? console.log(`${b} is gretest`) : console.log(`${c} is gretest`);
}