const promt = require('prompt-sync')();

function AddingPropertiesToConstructor() {

    function ObjectConstructor() {
        this.name = 'chetan';
        this.age = 21;
    }

    let object = new ObjectConstructor();

    console.log(object.age);

    console.log(ObjectConstructor.prototype);

    ObjectConstructor.prototype.gender = 'male';

    console.log(object.gender);

    ObjectConstructor.prototype.salary = '2LPA';
    ObjectConstructor.prototype.spend = 2000;

    console.log(ObjectConstructor.prototype);
}

function addingMethodsToConstructor() {
    let Item = function () {
        this.company = 'oreo';
        this.evaluation = '2cr';
    }
    let item = new Item();
    console.log(item.evaluation);

    Item.prototype.info = function () {
        console.log(`Company name is ${this.company}`);
        console.log(`Evaluation  is ${this.evaluation}`);
    }
    item.info();

    Item.prototype = {
        info: function () {
            console.log(`Company name is ${this.company}`);
        }
    }

    let object = new Item();
    object.info();
    item.info();
}
// addingMethodsToConstructor();

function prototypeChaning() {
    let Item = function () {
        this.name = 'chetan';
    }
    Item.prototype.name = 'gaurav';
    let item = new Item();
    console.log(item.name);
}
// prototypeChaning();

function accessingPrototypeUsingObject()
{
    let Item = function()
    {
        this.name = 'aman';
    }
    Item.prototype.age = 22;
    let item = new Item();
    console.log(Item.prototype);
    console.log(item.__proto__);
}
accessingPrototypeUsingObject();
