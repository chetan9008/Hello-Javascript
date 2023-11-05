function example1() {
    let count = 1;
    let promise = new Promise(function (resolve, reject) {
        if (count) {
            resolve('Problem solved');
        }
        else {
            reject('Problem is there');
        }
    });


    console.log(promise);
}

function example2() {
    let promise = new Promise((resolve, reject) => {
        reject('Problem is gone');
    })

    promise.then((result) => {
        console.log(result);
    })

        .then(() => {
            console.log('This is second then');
        })
        .then(()=>{
            console.log(`Result By Third then`);
        })
}

// example2();

function example3()
{
    let promise = new Promise((resolve,reject)=>
    {
        reject('You are fired');
    })

    promise.then((result)=>
    {
        console.log(result);
    })

    .catch((result)=>
    {
        console.log(result);
    })
}

// example3();

function example4()
{
    function api()
    {
        return new Promise((resolve,reject)=>
        {
            resolve('adidas');
        })
    }

    function greet()
    {
        console.log('hello world');
    }

    let id = setTimeout(greet,2000);

    api().then((result)=>
    {
        console.log(`Brand name is ${result}`);
    })
}
example4();

function example5()
{
    let promise = new Promise((resolve,reject)=>
    {
        resolve('Problem is gone');
    })

    promise.then((result)=>
    {
        console.log(result);
    })
    .catch((result)=>
    {
        console.log(result);
    })
    .finally(()=>
    {
        console.log('This code is executed in any ways');
    })
}
// example5();

