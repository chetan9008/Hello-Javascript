function example() {
    async function afunction() {
        console.log('Asyncronous Function');
        return Promise.resolve('success');
    }

    afunction();
    afunction().then((result) => {
        console.log(result);
    })
}


let example2 = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved in 2 sec');
        }, 2000);
    })

    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved in 3 sec');
        }, 3000);
    })

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved in 5 sec');
        }, 5000);
    })


    async function waitForPromise() {
        let result = await promise;
        let result1 = await promise1;
        let result2 = await promise2;

        console.log(result);
        console.log(result1);
        console.log(result2);
        console.log('hello java');
    }

    waitForPromise();
}


function example3() {
    function promise() {
        return new Promise((resolve, reject) => {
            reject('Data fetched');
        })
    }

    async function errorHandling() {
        try {
            let result = await promise();
        }
        catch(error)
        {
            console.log(error);
        }
    }

    errorHandling();
}

// example3();

let example4 = ()=>
{
    let promise = new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log('Sorry i`am 2 seconds late');
        },2000);
    })

    // async function display()
    // {
    //     let result = await promise;
    //     console.log(result);
    // }
    // display();

    promise.then((result)=>
    {
        console.log(result);
    })
}
example4();