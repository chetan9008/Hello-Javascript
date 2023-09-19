const prompt = require('prompt-sync')();
let i = 0;
// while(i!=6)
// {
//     console.log(i);
//     i++;
// }

// let sum = 0;
// let number = parseInt(prompt('enter the number : '));
// while (number >= 0) {
//     sum += number;
//     number = parseInt(prompt('Enter the number : '));
// }
// console.log(`Sum is ${sum}`);

// do
// {
//     console.log(i);
//     i++;
// }while(i!=6);

// while(1)
// {
//     console.log('infinity');
// }

// while(i != 0)
// {
//     console.log(`9 * ${i} = ${9*i}`);
//     i--;
// }

// state:while (i != 11) {
//     i++;
//     if (i == 5)
//         continue state;
//     console.log(i);
// }

i = String('B');
switch (i) {
    case 'a':
    case 'A':
        console.log("First alphabhet");
        break;
    case 'b':
    case 'B':
        console.log("Second Aphabhet");
        break;
    default:
        console.log("Another Aphabhet");
        break;
}