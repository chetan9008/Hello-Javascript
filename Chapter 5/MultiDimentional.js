let array = [[1, 2, 3], [4, 5, 6]];

console.log(array[1][1]);

array.push(2);
array.push(2);
array.push(2);

array.push([1, 2, 3]);
array[5].push('chetan');

console.log(array);
console.log(array[5]);

array[5].splice(0, 2);
array[5].splice(-1, 1);
array[5].splice(0, 0, 1, 2);
array.splice(2, 3);
console.log(array);



for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}
console.log();



for (item of array) {
    for (value of item) {
        console.log(value);
    }
}
console.log();
array.forEach((innerArray) => {
    innerArray.forEach((item) => {
        console.log(item);
    })
})


console.log(array);

let array2 = [1, 2, 3];

array2.forEach((value, index, array) => {
    array[index] = 0;
})

console.log(array2);

