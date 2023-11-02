const prompt = require('prompt-sync')();
let value = prompt('Enter the number : ');
value = parseInt(value);
let array = [1, 2, 3, 4, 5];
function first_example() {
    let index = array.indexOf(value);
    array.splice(index, 1);
    console.log(array);
}


function second_example() {
    let example_array = [];

    array.forEach((val, key) => {
        if (val !== value) {
            example_array.push(val);
        }
    })

    console.log(example_array);
}

second_example();
// first_example();