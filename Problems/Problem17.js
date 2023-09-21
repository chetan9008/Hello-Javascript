// fibonacci series 
let a = 0;
let b = 1;
let c;
for(let i=0;i<=20;i++)
{
    c = a+b;
    console.log(c);
    a = b;
    b = c;
}