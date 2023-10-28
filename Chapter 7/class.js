function Class1() {
    let Item = function () {
        this.name = 'chetan';
        this.class = 'bsc';
        this.greet = function () {
            console.log('hello javascript');
        }
    }

    let item = new Item();

    console.log(item);

    class Person {
        constructor() {
            this.name = 'chetan';
        }

        greet() {
            console.log(`hello ${this.name}`);
        }
    }

    let person = new Person();

    console.log(person.name);
    person.greet();

    // let item2 = new anotherItem();

    class anotherItem {
        constructor(name) {
            this.name = name;
        }

        get Name() {
            return this.name;
        }
        set Name(n) {
            this.name = n;
        }
    }

    let item1 = new anotherItem('chetan');

    console.log(item1.name);

    console.log(item1.Name);
    item1.Name =
        'gaurav';
    console.log(item1.Name);

    console.log(typeof Person);
}


function Class2() 
{
    class Student
    {
        constructor(name,c,roll,m1,m2)
        {
            this.name = name;
            this.class = c;
            this.roll  = roll;
            this.marks = {
                cLanguage:m1,
                cppLanguage:m2
            }
        }

        get total()
        {
            return (this.marks.cLanguage + this.marks.cppLanguage);
        }

        information()
        {
            console.log(`Name is ${this.name}`);
            console.log(`Class is ${this.class}`);
            console.log(`Roll no is ${this.roll}`);
            console.log(`Marks in c is ${this.marks.cLanguage}`);
            console.log(`Marks in c++ is ${this.marks.cppLanguage}`);
        }

        grade()
        {
            (this.total < 100)?(console.log('chetan is fail')):(console.log('chetan is pass'));
        }
    }

    let chetan = new Student('chetan','bsc',14,90,91);
    let result = chetan.total;

    chetan.information();
    console.log('Result is ' + result + '/200');

    chetan.grade();
}
Class2();