let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let result = '';
let length = 5;
for(let i=0;i<length;i++)
{
    result += string.charAt(Math.floor(Math.random() * string.length));
}
console.log(result);

result = Math.random().toString(36).substring(2,7);

console.log(result);