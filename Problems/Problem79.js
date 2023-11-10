let array1 = [1,{a:2},{b:3}];

let array2 = [1,{a:2},3];

array1 = String(array1);

array2 = String(array2);
console.log(array1 == array2);

array1 = [1,{a:2},3];
array2 = [1,{a:2},3];

function compare(a,b)
{   
    if(a.length != b.length)
    {
        return false;
    }
    else
    {
        for(let i=0;i<a.length;i++)
        {
            if(a[i] != b[i])
            {
                return false;
            }
        }
        return true;
    }
}
console.log(compare(array1,array2));