let person = new Person();
let personSecond = new Person();

function Person() {
    this.name = 'chetan';
    this.rollNo = 18;

    this.greet = function () {
        console.log('hello java');
    }
}

console.log(person.name);
person.greet();
personSecond.greet();

let chetan = new Student();

function Student() {
    this.rollNo = 15;
    this.profession = 'front end development';

    this.hobby = function () {
        console.log(`chetan hobby is gaming`);
    }
}

chetan.hobby();


let Game = function (gameName, downloads, type) {
    this.name = gameName;
    this.downloads = downloads;
    this.type = type;

    this.info = function () {
        console.log(`Name is ${this.name}`);
        console.log(`Downloads is ${this.downloads}`);
        console.log(`Type is ${this.type}`);
    }
}

let game = new Game('pubg', '100 million +', 'multiplayer');
game.info();

function example3() {
    let Item = function () {
        this.name = 'oreo';
    }

    let item = new Item();

    console.log(item.name);

    item.price = 10;

    console.log(item.price);

    let item2 = new Item();
    console.log(item2.price);;;;;;
}

function example4() {

    let Item = function () {
        this.name = 'oreo';
    }

    let item = new Item();

    let item2 = item;
    item2.name = 'parle g';

    console.log(item.name);
}

example4();

function addingMethodsAndProperties()
{
    let Item = function()
    {
        this.name = 'oreo';
    }

    let item = new Item();
    console.log(item.name);

    item.price = 10;

    item.info = function()
    {
        console.log(`Name is ${this.name}`);
        console.log(`Price is ${this.price}`);
    }

    item.info();

    let item2 = new Item();
    item2.info();
}
// addingMethodsAndProperties();

function Prototype()
{
    function Item()
    {
        this.name = 'oreo';
    }

    let item = new Item();
    let item2 = new Item();

    console.log(item.name);

    Item.prototype.price = 20;

    console.log(item.price);
    console.log(item2.price);

}
Prototype();

// let item =
// {
//     name:'oreo'
// }

// console.log(item.name);

// item.count = 20;

// console.log(item.count);


function builtInFunctions()
{
    let name = new String('chetan');
    console.log(name);
    let array  = new Array();
    array.push(1);
    array.push(1);
    array.push(1);
    console.log(array[0]);


    let object1 = new Object(
        {
            name:'chetan',
            netWorth:'2m'
        }
    )
    console.log(object1.name);
    console.log(object1.netWorth);
}
builtInFunctions();