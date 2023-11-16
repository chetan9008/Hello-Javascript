function wrapFirst() {

    let array = [1, 2, 3, 4];

    let iterator = array[Symbol.iterator]();
    console.log(iterator);
    let set = new Set();
    iterator = set[Symbol.iterator]();
    console.log(iterator);

    for (let value of array[Symbol.iterator]()) {
        console.log(value);
    }

    iterator = array[Symbol.iterator]();
    for (let i = 0; i < array.length; i++) {
        console.log(iterator.next().value);
    }
}


function example() {
    let array = [1,2,3];

    function display(arr)
    {
        let n = 0;
        return {
            next()
            {
                if(n <arr.length)
                {
                    return {
                        value:arr[n++],
                        done:false
                    }
                }
                else
                {
                    return{
                        value:undefined,
                        done:true
                    }
                }
            }
        }
    }

    let iterator = display(array);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

example();