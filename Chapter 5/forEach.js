let array = [1,2,3,4,5];

function display(item,index,array)
{
    array[index] = Math.pow(item,2);
}
for(index in array)
{
    console.log(index);
}

for(item of array)
{
    console.log(item);
}

array.forEach(display);
array.forEach(function (item)
{
    console.log(item);
});