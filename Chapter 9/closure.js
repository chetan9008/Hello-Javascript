function example()
{
    function functionOuter() {
        function inner() {
            console.log('This is inner function');
        }
        console.log('This is outer function');
        inner();
    }

    functionOuter();
}

function example1()
{
    function outer(name)
    {
        function inner()
        {
            console.log(`Your name is ${name}`);
        }
        return inner;
    }

    let outside = outer('chetan');
    console.log(outside);
    outside();


    function toBeReturned()
    {
        function returnedFunction()
        {
            console.log('Returned function');
        }
        return returnedFunction;
    }

    let x = toBeReturned();
    x();
}
// example1();

function example2()
{
    function inner(y)
    {
        function outer(x)
        {
            return `value  is ${x*y}`;
        }
        return outer;
    }
    let outerFunction = inner(2);
    console.log(outerFunction());
    console.log(outerFunction(3));
}
// example2();

function example3()
{   
    
    function increase()
    {
        let a = 0;
        function increaseBy1()
        {
            return ++a;
        }
        return increaseBy1;
    }
    let x = increase();
    console.log(x());
    console.log(x());
    console.log(x());
    a= 0;
    console.log(x());
}
example3();