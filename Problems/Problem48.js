let object = 
{
    name:'chetan',
    class:'bsc'
}
let email = Symbol('email');
object.age = 21;
object['email'] = 'abc@gmail.com'
object[email] = 'xyz@gmail.com';
console.log(object);