let email = Symbol('email');
let object = {
    name:'chetan',
    class:'bsc',
    [email]:'xyz@gmail.com'
}

let string = JSON.stringify(object);

console.log(string);

// let anotherString = object.toString();
let anotherString = String(object);
let anotherString1 = object[email].toString();
console.log(anotherString);
console.log(anotherString1);