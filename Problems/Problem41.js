
let email = Symbol();
let object = {
    name:'chetan',
    class:'bsc',
    [email]:'abc@gmail.com',
    anotherObject :{
        name:'xyz',
        occupation:'none'
    }
}

delete object.class
delete object[email];
delete object.anotherObject;
console.log(object);