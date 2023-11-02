let array = [1, 2, 4, 5, 6];

//using for loop 

let index = 2;

function usingSplice() {
    array.splice(index, 0, 3);

    console.log(array);
}

function usingFor()
{
    for(let i = array.length;i>index;i--)
    {
        array[i] = array[i-1];
    }
    array[index] = 3;
    console.log(array);
}
usingFor();