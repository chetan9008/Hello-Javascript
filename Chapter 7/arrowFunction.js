let add = (x,y) => x+y;

console.log(add(4,3));

let hello = ()=> console.log('hello world');

hello();

hello = x => console.log(`value of x is ${x}`);

hello(NaN);

let age = 33;

let appreciated = (age < 18) ?
()=> console.log('choti bachi'):
()=> console.log('bhot tej ho rahe ho');

appreciated();

let multiply = (x,y) => {
    let mul = x*y;
    return mul;
}

console.log(multiply(2,.1));

let name = 'gaurav';

let object = {
    name:'chetan',
    class:'bsc',
    simpleFunction:function(){
        console.log(`name is ${this.name}`);
        console.log(`class is ${this.class}`);
        let innerWear = function()
        {
            console.log(`name is ${this.name}`);
        }
        innerWear();
    }
}

object.simpleFunction();

let object1 = {
    name: 'chetan',
    class: 'bsc',
    arrowFunction: function () {
        console.log(`name is ${this.name}`);
        console.log(`class is ${this.class}`);
        let innerWear = () =>
        {
            console.log(`name is ${this.name}`);
        }
        innerWear();
    }
}

object1.arrowFunction();


let argument = function(x,y)
{
    console.log(arguments);
    console.log(typeof arguments);
}

argument(1,2);

let arrowFunction = (...arg) =>
{
    console.log(arg);
    console.log(typeof arg);
}

arrowFunction(1,2,3);

object = {
    name:'chetan',
    fun:()=>
    {
        console.log(this.name);
    }
}


let Object1 = function()
{
    this.name = 'chetan';
    this.class = 'bsc';
}

let object2 = new Object1();

console.log(object2);