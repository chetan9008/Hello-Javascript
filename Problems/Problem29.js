const prompt = require('prompt-sync')();

let range = parseInt(prompt('Enter the range : '));

// console.log(0);
// console.log(1);
// fibonacciSeries(0, 1, range);

function fibonacciSeries(first, second, r) {
    if (r == 0)
        return 1;
    else {
        let sum = first + second;
        first = second;
        second = sum;
        console.log(sum);
        fibonacciSeries(first, second, r - 1);
    }
}

//programmiz approch 

function recursive(num)
{
    if(num < 2)
    return num;
    else
    return recursive(num -1) + recursive(num -2);
}
for(let i=0;i<range;i++)
{
    console.log(recursive(i));
}
