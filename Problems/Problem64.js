let date = new Date();

let year = date.getFullYear();

let month = date.getMonth() + 1;

date = date.getDate();

console.log(`--Date--
${date}-${month}-${year}`);

date = new Date();

date = date.toLocaleDateString();

let time = new Date();

time = time.toLocaleTimeString();

console.log(`${date} : ${time}`);