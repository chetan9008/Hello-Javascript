let map = new Map();

console.log(map);

map.set('key1', 'chetan');
map.set('key2', 12);
let object = {};
map.set(object, { name: 'chetan', class: 'bsc' });
console.log(map);

console.log(map.get('key2'));
console.log(map.has(object));
console.log(map.get(object));


if (map.delete(object))
    console.log(`key is removed`);
else
    console.log(`key does n't exist`);


if (map.delete(object))
    console.log(`key is removed`);
else
    console.log(`key does n't exist`);

map.clear();

console.log(map);
let email = Symbol('email');
map.set('info', { name: 'chetan', class: 'bsc', [email]: 'xyz@gmail.com' });

console.log(map.size);

map.set('string', 'chetan');
map.set('number', 12);
console.log(`iterate through for of : `);
for (let [key, value] of map) {
    console.log(`${key} => ${value}`);
}

map.forEach((value, key) => {
    console.log(`${key} => ${value}`);
})

for (let key of map.keys()) {
    console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}

for (let element of map.entries()) {
    console.log(`${element[0]} => ${element[1]}`);
}

object = {}

let wMap = new WeakMap();

wMap.set(object, {
    name: 'chetan',
    class: 'bsc'
})

console.log(wMap);

wMap.delete(object);

let object2 = {};
wMap.set(object2, 'string');

console.log(wMap.has(object2));

console.log(wMap.get(object2));


for(let key in wMap)
console.log(key);