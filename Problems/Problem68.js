const prompt = require('prompt-sync')();
let value = prompt('Enter the number : ');
value = parseInt(value);

let array = [1, 2, 3, 4, 5];

if (array.includes(value))
    console.log(`${value} is present`);
else
    console.log(`${value} is not present`);

array.forEach((val) => {
    if (val === value) {
        console.log(`${value} is present`);
    }
})

if (array.indexOf(value) != -1) {
    console.log(`${value} is present`);
}
else {
    console.log(`${value} is not present`);
}
