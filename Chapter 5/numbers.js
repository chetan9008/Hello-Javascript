let numberFunction = function () {
    let number = 3e2;
    let anotherNumber = 3e-1;
    console.log(number);
    console.log(anotherNumber);

    let hexaNumber = 0xf;
    console.log(hexaNumber);

    console.log(number + anotherNumber);

    let string = '2';

    console.log(string + number);
    console.log(string - number);
    console.log(string / number);
    console.log(string * number);

    string = 'hello';

    console.log(string - 3);
    console.log(isNaN(string * 3));
    console.log(typeof (string / 3));
    console.log(2 / 0);
    console.log(-2 / 0);

    console.log(29834085098304985209840329498387089405984093804598304958n);
    console.log(.1 + .2);
    console.log((.1 * 10 + .2 * 10) / 10);
    console.log((.1 + .2).toFixed(2));


    const a = 9999999999999999;
    console.log(a);

    let b = new Number(2);
    let string1 = new String('chetan');
    console.log(typeof b);
    console.log(typeof string1);

    number = Math.pow(2, 5);
    console.log(Number.isSafeInteger(number));
    console.log((2.232).toExponential(1));
    console.log((2.22212).toFixed(2));
    console.log((2.3454).toPrecision(3));
}

let numberMethods = function()
{
    let a= 33;
    console.log(a.valueOf());

    let date = new Date();
    let time = date.toLocaleString();
    console.log(time);
    // console.log(Number.parseInt("11110101",16));
}
numberMethods();


function numberProperty()
{
    let value = Number.EPSILON;
    console.log(value);
    let a = .4;
    let b = .5;
    let c = .9;
    (a + b == c) ? (console.log('true')):(console.log('false'))
    let safe = Number.MAX_SAFE_INTEGER;
    console.log(safe);
    let max = Number.MAX_VALUE;
    console.log(max);
    let minSafe = Number.MIN_SAFE_INTEGER;
    console.log(minSafe);
}
numberProperty();