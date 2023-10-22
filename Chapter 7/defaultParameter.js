let add  = (x=2,y=3) => x + y;

console.log(add());

let expression = (x=2,y=x,z=x+y) =>
{
    console.log(z);
}

expression();

let variable = () => 20;

let calculator = (x = 10, y = x * variable()) =>
{
    console.log(y);
}

calculator(undefined);