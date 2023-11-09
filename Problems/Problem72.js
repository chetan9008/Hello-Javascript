let array = [1,2,3];

array = [];

console.log(array);

array = [1,2,3];

array.splice(0,array.length);

console.log(array);

array = [1,2,3];

array.length = 0;

console.log(array);