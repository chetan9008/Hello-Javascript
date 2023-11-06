let promise = Promise.race([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('1 seconds');
        }, 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('4 seconds');
        }, 4000);
    }), new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('3 seconds');
        }, 3000);
    })
])

promise.then((result) => {
    console.log('Then result is',result);
})

    .catch((result) => {
        console.log('Catch result is',result);
    })