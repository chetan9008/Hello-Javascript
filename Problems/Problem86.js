function add(x = 3,y= 2)
{
    return x+y;
}

console.log(add());
console.log(add(4));
console.log(add(4.4,4.9));


function substract(a = 2, b = a - 1)
{
    return a - b;
}

console.log(substract());
console.log(substract(5));