//largest amount threee

let first=110,second=22,third=3333;

let largest;
if(first >second && first > third)
{
    largest = first;
}
else
{
    if(second > first && second > third)
    largest = second;
    else
    largest = third;
}
console.log(`Largest number is ${Math.max(first,second,third)}`);
console.log(`Largest number is ${largest}`);