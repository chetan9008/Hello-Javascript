function example1()
{
    try {
        var a = 3;
        console.log(b);
    }
    catch (error) {
        console.log("Error found: " + error);
    }
    finally {
        console.log(`Value of a is : ${a}`);
    }
}

function example2()
{
    try{
       setTimeout(function(){},3000);
       console.log('wait for 3 sec');
    }
    catch(error)
    {
        console.log('Error : ' + error);
    }
}
// example2();

function example3() {
        setTimeout(function()
        {
            try
            {
                console.log(a);
            }
            catch(error)
            {
                console.log('Error : ' + error);
            }
        },3000);
}
// example3();

function example4()
{
    try{
        let a = 1,b = 0;
        let divison = a/b;
        // console.log(divison);
        if(divison == Infinity)
        {
            throw(divison);
        }
    }
    catch(error)
    {
        console.log('Divison is ' + error);
    }
}
example4();

