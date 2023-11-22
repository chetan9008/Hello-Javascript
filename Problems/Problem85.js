let variable = undefined;
variable = null;

if(variable === undefined)
console.log('undefined');

if((typeof variable === 'undefined') || ( variable === null))
{
    console.log(
        'undefined or Null'
    );
}