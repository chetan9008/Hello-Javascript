// object Literal 

let object = {
    name:'chetan',
    age:21,
    profession:'front end developer',
    info:function()
    {
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Profession is ${this.profession}`);
    }
}

object.info();

let item = new Object({
    company:'oreo',
    price:20,
    info:function()
    {
        console.log(`Company is ${this.company}`);
        console.log(`Price is ${this.price}`);
    }
})
console.log('\n');
item.info()


function Student(name,roll)
{
    this.name = name;
    this.rollNo = roll;
    this.info = function()
    {
        console.log(`Name of student is ${this.name}`);
        console.log(`Roll no of student is ${this.rollNo}`);

    }
}

let student = new Student('chetan',14);
console.log();
student.info();