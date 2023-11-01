let date = new Date();

let d = date.toDateString();

console.log(d);

let time = date.toLocaleTimeString();

console.log(time);

let x = date.toLocaleDateString();

console.log(x);

let y = date.toLocaleString();

console.log(y);

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(`Time is ${hours}:${minutes}:${seconds}`);


