//clone object
let email = Symbol();
let Object1 = function()
{
    this.name = 'chetan',
    this.class = 'bsc',
    this.occupation = 'front end'
    this.marks = {
        maths:90,
        computer:99
    }
    this.greet = function(){
        console.log('hello');
    }
    this[email] = 'abc@gmail.com' 
}

let object = new Object1();

let anotherObject = Object.assign({},object);

anotherObject.name = 'gaurav'
// anotherObject.marks.maths = 100;

console.log(anotherObject);

let anotherObject1 = {...object};

anotherObject1.name = 'gaurav';
// anotherObject1.marks.maths = 100;
console.log(anotherObject1P);

let anotherObject2 = JSON.parse(JSON.stringify(object));

anotherObject2.marks.maths = 100;

console.log(anotherObject2);