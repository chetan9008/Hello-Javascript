for(let i=1;i<=10;i++)
console.log(i);
let sum=0;
for(let i=1;i<=100;i++)
sum += i;
console.log(sum);

let array=[1,2,3,4];

array.forEach(element => {
    console.log(element);
});

for(let i of array)
{
    console.log(i);
}

let object = {
    Name:"chetan",
    Gender:"male",
    age:21
}
for(let o in object)
{
    console.log(object[o]);
}

let number = new Array();
for(let i=1;i<=100;i++)
{
    number.push(i);
}

for(let n of number)
{
    if(n%2 ==0)
    {
        console.log(n);
    }
}

function myfunction(item,index,arr)
{
    arr[index] =  item + 2;
}

array.forEach(myfunction);

array.forEach(item =>
    {
        console.log(item);
    })

array.forEach(function(item)
{
    console.log(item);
})

let string = "chetan";

for(let ch of string)
{
    console.log(ch);
}


console.log(.1 + .2 );