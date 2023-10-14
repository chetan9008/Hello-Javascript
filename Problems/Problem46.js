let object = {
    name:'chetan',
    class:'bsc'
}
let age = {
    age:21
}

let newObject = Object.assign(object,age);
console.log(newObject);


let newOBject = {...object,...age};

console.log(newOBject);