let json = {
    "name":"chetan",
    "age":12,
    "array":[1,2,3],
    "object":{
        name:'gaurav'
    }
}

console.log(json.name);
console.log(json.age);
console.log(json.array[2]);
console.log(json.object.name);

console.log(typeof json);


json = '{"name":"chetan","age":21}'

console.log(typeof json);

let object = JSON.parse(json);
console.log(object);


json = JSON.stringify(json);

console.log(json);

console.log(typeof json);
