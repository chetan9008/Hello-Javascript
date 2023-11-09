let array = [2, 3, 4];
array.unshift(1);

console.log(array);

array = [2, 3, 4];

array.splice(0, 0, 1);

console.log(array);

array = [2, 3, 4];

array = [1,...array]

console.log(array);

array = [2, 3, 4];

array = [1].concat(array);

console.log(array);