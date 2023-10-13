let object = 
{
    name:'chetan',
    class:'bsc',
    occupation:'front end'
}
if('name' in object)
{
    console.log('key present');
}
else
{
    console.log('key not present');
}

function Item()
{
    this.name  = 'oreo';
    this.price = '10rs';
}

let item = new Item();

if(item.hasOwnProperty('price'))
{
    console.log('key exists');
}
else
{
    console.log('key absent');
}