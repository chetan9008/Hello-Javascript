function recursion(number)
{
    console.log(number);
    if(number > 1)
    recursion(number-1);
}

// recursion(5);

function factorial(number)
{
    if(number == 0)
    return 1;
    else
    return (number) * (factorial(number-1));
}

// console.log(factorial(5));

function print1to10(n)
{
    console.log(n);
    if(n != 10)
    {
        print1to10(n+1);
    }
}
print1to10(1);
