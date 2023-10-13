let object = {
    name: 'chetan',
    class: 'bsc',
    college: 'jv jain college',
    marks: {
        maths: 90,
        computer: 99
    },
    years:{
        high:2020,
        inter:2022
    }
}

let person = {
    age: 30
}

object.__proto__ = person;

for (let key in object) {
    console.log(object[key]);
    if (typeof object[key] === 'object') {
        for (let innerKey in object[key]) {
            console.log(object[key][innerKey]);
        }
    }
}

console.log();
for (let [key, value] of Object.entries(object)) {
    console.log(value);
}

