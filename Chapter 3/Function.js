function addition(a,b)
{
    console.log(`sum of ${a} and ${b} is ${a+b}`);
}

function add(a,b)
{
    return (a+b);
}

let substraction = function(a,b){return a-b};
let multiplication = function(a,b){return a*b};
let division = function(a,b){console.log(`Division of ${a} and ${b} is ${a/b} `);}
addition(2,3);
addition('1',1);
addition('1','1');
console.log(add(2, '1'));
console.log(add('2','1'));
console.log(substraction('2', '1'));
console.log(multiplication('2', '1'));
division(4,2);