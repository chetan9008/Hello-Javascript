let object = {
    name: 'chetan',
    class: 'bsc',
    college: 'jv jain college',
    marks: {
        maths: 90,
        computer: 99
    }
}

let person = {
    age:30
}

object.__proto__ = person;

for (let key in object) {
    console.log(object[key]);
}

console.log();
for(let [key,value] of Object.entries(object))
{
    console.log(value);
}

