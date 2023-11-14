function example() {

    console.log(this);
    this.name = 'chetan';
    console.log(this.name);
    console.log(window.name);


    function any() {
        console.log(this);
        console.log(this.name);
    }
    any();


    function Item() {
        this.name = 'chetan',
            this.class = 'bsc'
        this.display = function () {
            console.log(this);
        }
    }

    let item = new Item();

    item.display();


    class Person {
        constructor() {
            this.name = 'chetan';
        }
        greet() {
            console.log(`hello ${this.name}`);
        }
    }

    let person = new Person();

    person.greet();

}

function example1() {
    let object = {
        name: 'chetan',
        class: 'bsc',
        greet: function () {
            console.log('outer function');
            console.log(this);
            function inner() {
                function moreInner() {
                    console.log(this);
                    console.log(this.name);
                }
                moreInner();
            }
            inner();
        }
    }
    object.greet();
}

function example2() {
    let object = {
        name: 'chetan',
        greet: function () {
            let hello = () => {
                console.log(this.name);
            }
            hello();
        }
    }

    object.greet();
}
// example2();


function example3()
{
    'use strict';
    this.name = 'chetan';
    function display() {
        console.log(this.name);
    }
    display.call(this);
}

function example4()
{
    let object = {
        name:"chetan"
    }

    function greet()
    {
        console.log(this.name);
    }

    greet.call(object);
}
example4();