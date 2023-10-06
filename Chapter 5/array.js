function arrayPractice() {
    let array = [];//array literal
    array = ['chetan', 12, function greet() { console.log('hello'); }];
    console.log(array);

    let array1 = new Array();

    array1 = ['chetan', 12, 'kumar'];

    console.log(array1);

    let array3 = [{ name: 'chetan' }]
    console.log(array3[0].name);

    array3.push({ class: 'bsc' });
    array3.unshift({ member: 'vip' });
    array3.shift();
    array3.shift();
    console.log(array3);


    let array4 = [1, 2, 3, 4];
    array4[4] = 'chetan';
    array4[4] = 'gaurav';
    array4[6] = 'sparsh';
    console.log(array4);
    console.log(array4[5]);

    let array5 = ['chetan', 'gaurav', 'aditya'];

    let removedItem = array5.pop();

    console.log(removedItem);

    let removedFromShift = array5.shift();

    console.log(removedFromShift);

    // array5.shift();
    array5.pop();

    console.log(array5);

    console.log(array5.length);
}

function arrayMethods()
{
    let array1 = [1,'2',3,2,2];
    let array2 = ['chetan','guarav','sparsh'];

    let array3 = array1.concat(array2);

    console.log(array1);
    console.log(array2);
    console.log(array3);

    console.log(array1.indexOf(2,4));
    console.log(array2.indexOf('sparsh'));

    function even(num)
    {
        if(num % 2 == 0)
        return num;
    }

    console.log(array1.find(even));
}
// arrayMethods();

function arrayMethods1()
{
    let array = [1,2,3];

    function square(num)
    {
        console.log(num * num);
    }
    array.forEach(square);

    console.log(array.includes(22));

    array.unshift(22);

    console.log(array);
    array.sort(function (a, b) { return a - b; });
    console.log(array);
}
// arrayMethods1();
function arrayMethods2()
{
    let array = ['c','c++','Java','Ruby','python','js'];
    let newArray = array.slice(-1,-3);
    console.log(newArray);

    console.log(array);
    array.splice(3,-10,'Kotlin','React','Mongo Db');
    let removedElement = array.splice(0);
    console.log(removedElement);
    console.log(array);
}

// arrayMethods2();

function arrayMethods3() {
   let array = [1,'1','string',function greet(){console.log('hello');},
{
    name:'chetan',
    caste:'sc'
}];


array.sort();
console.log(array);
}

// arrayMethods3();

let array = ['chetan','gaurav'];
let anotherArray = array;
anotherArray.unshift('sparsh');
console.log(array);

array.name = 'kashish';

console.log(array);

console.log(array['name']);


