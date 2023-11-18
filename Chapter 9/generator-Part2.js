
function example() {
    let iterable = {
        [Symbol.iterator]() {
            let n = 1;
            return {
                next() {
                    if (n < 6) {
                        return {
                            value: n++,
                            done: false
                        }
                    }

                    else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            }
        }
    }
    for (let value of iterable) {
        console.log(value);
    }

    console.log();
    console.log();

    function* generatorFunction() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    }
    let generator = generatorFunction();
    for (let value of generator) {
        console.log(value);
    }


}

function example2() {
    function* generatorFunction() {
        yield 1;
        yield 2;
        yield 3;
    }
    let generator = generatorFunction();
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.return());
}
// example2();
function example3() {
    function* generatorFunction() {
        yield 1;
        return 2;
    }
    let generator = generatorFunction();
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.return(3));
}
// example3();

function example4() {
    function* generatorFunction() {
        console.log('First way');
        yield;
        console.log('Second way');
        yield 2;
        console.log('Third way');
        yield 3;
    }
    let generator = generatorFunction();
    console.log(generator.next());
    console.log(generator.next());
    generator.throw(new TypeError('Fuck off'));
    console.log(generator.next());
}
example4();

