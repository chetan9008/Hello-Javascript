'use strict';
// "use strict"
// `use strict`// no use strict mode 

// let my = 'chetan';

// console.log(my);

function greet() {
    hello = 'chetan';
    console.log(hello);
}
// greet();


function example()
{
    let object = {
        name:'chetan'
    }
    console.log(object.name);
    // delete object;

}
// example();

function example1()
{
    // function variable(x,x)
    // {
    //     console.log(x*x);
    // }

    // variable(2,2);
}
// example1();

function example2()
{
    let object = {};

    Object.defineProperty(object,'x',{value:21,writable:true});
    console.log(object.x);
    object.x = 11;

    object = {get x() {
        return 22;
    }}

    console.log(object.x);
    // object.x = 33;
    Object.preventExtensions(object);
    object.y = 22;

}
// example2();
function example3()
{
    // let x = 030;
    // console.log(x);

    // let arguments = 'chetan';
    // console.log(arguments);
}
example3();