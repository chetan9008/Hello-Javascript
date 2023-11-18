function example()
{

    function* generatorFunction() {
        console.log("first way");
        yield 1;
        console.log("Second way");
        yield 2;
        console.log("Last way");
        yield 3;
    }

    let generator = generatorFunction();

    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
}

function example1()
{
    function* generatorFunction()
    {
        let x = yield 1;
        console.log(x);
        let str = yield 'hello';
        console.log(str);
    }

    let generator = generatorFunction();

    console.log(generator.next());
    console.log(generator.next(2));
    console.log(generator.next('sir'));
}
example1();