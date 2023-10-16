function example1() {
    try {
        const number = 2;
        throw number / 0;
    }
    catch (error) {
        console.log(`Division is ${error}`);
    }
}

function example2() {
    const number = 10;
    try {
        if (number > 20) {
            console.log('Okay Number is enough');
        }
        else {
            // throw 'Number is short';
            throw new TypeError('Number is short');
        }
        console.log('Muje kyu toda');
    }
    catch (error) {
        // console.log(`Error is : ${error}`);
        console.log(`${error}`);
    }
}
// example2();

function example3() {
    let a = 0;
    try {
        throw 'a is 20';
    }
    catch (error) {
        if (a > 10) {
            console.log(`error is ${error}`);
        }
        else {
            throw new TypeError(`Value of a is ${a}`);
        }
    }
}
// example3();

function example4()
{
    first();
    function first()
    {
        try
        {
            second();
        }
        catch(error)
        {
            console.log(`Now in first function`);
        }
    }

    function second()
    {
        try 
        {
            throw new Error('Error is nothing . just testing');
        }
        catch(error)
        {
            console.log(`${error}`);
            throw error;
        }
    }
}
example4();
