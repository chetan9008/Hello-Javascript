function symbolFunction() {

    let symbol = Symbol('chetan');
    let string = 'chetan';
    let variable = Symbol();
    console.log(variable);
    console.log(symbol.description);
    console.log(typeof symbol);
    if (string == symbol)
        console.log('same');
    else
        console.log('not same');

    let name = Symbol('name');

    let object = {
        subject: 'computer',
        [name]: 'chetan',
        marks: 90
    }
    console.log(object);
    for (let key in object) {
        console.log(key);
    }

    object[name] = "gaurav";

    console.log(object[name]);

    console.log(object);
}
function symbolFunction1()
{
    let object = {};
    object.name = 'chetan';
    object.class= 'bsc';
    object.email = 'abc@gmail.com';
    console.log(object);
    let email = Symbol('email');
    object[email] = 'xyz@gmail.com';
    console.log(object);

    let anotherObject = 
    {
        name:'chetan',
        class:'bsc',
        email:'abc@gmail.com',
        [email]:'abc@gmail.com'
    }
    console.log(anotherObject);
    console.log(anotherObject.email === anotherObject[email]);
}
// symbolFunction1();

function symbolMethods()
{
    let symbol = Symbol.for('colgate');
    console.log(Symbol.keyFor(symbol));
    let anotherSymbol = Symbol.for('colgate');
    console.log(symbol === anotherSymbol);

    let object = {
        name:'chetan',
        class:'bsc',
        [symbol]:'xyz'
    }
    let string = symbol.toString();
    console.log(string);
    console.log(typeof string);
    console.log(object.valueOf());
}

symbolMethods();