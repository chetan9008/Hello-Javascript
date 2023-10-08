let object = {
    name:'chetan',
    class:'bsc',
    skill:'front end development',
    hobby:'coding'
}

for(let key in object)
{
    console.log(`${key} = ${object[key]}`);
}

let salary = {
    chetan:12000,
    sparsh:14000,
    gaurav:13000
}

for(let key in salary)
{
    salary[key] = '$' + salary[key];
}
for(let value in salary)
{
    console.log(salary[value]);
}

let string = 'Java is fuck';

for(let i in string)
{
    console.log(string[i]);
}

let array = [1,2,'string',22,'23'];

for(let i in array)
{
    console.log(array[i]);
}