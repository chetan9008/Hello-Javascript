let array = [1, 2, 3, 4];

let object = {
    name: 'chetan',
    class: 'bsc'
}
function usingPush() {
    array.push(object);

    console.log(array);
}

function usingSplice()
{
    array.splice(array.length,0,object);

    console.log(array);
}
// usingSplice();

array[array.length] = object;

array = [...array,object];

console.log(array);

