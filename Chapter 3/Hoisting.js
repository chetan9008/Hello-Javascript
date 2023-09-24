
function example1() {
    console.log(a);
    var a = 5;
}

function example2() {
    a = 5;
    console.log(a);
    var a;
    var a = 10;
    console.log(a);
}

function example3() {
    b = 20;
    function hoisting() {
        b = 10;
        console.log(b);
        var b;
    }
    console.log(b);
    var b;
}
fun();

// function fun()
// {
//     console.log('hello hoisting');
// }

let fun = function () {
    console.log('hello hoisting');
}