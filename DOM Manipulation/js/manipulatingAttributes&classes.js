let listItem = document.querySelector('li'
);

let heading = document.querySelector('#heading');

console.log(heading);

heading.style.color = 'aqua';
heading.style.fontSize = '3rem';
console.log(listItem);

listItem.setAttribute('id','heading');

heading.removeAttribute('id');

heading.setAttribute('id','heading');

console.log(heading.getAttribute('id'));


heading.classList.add('dark');

console.log(heading.classList.contains(
    'dark'
));


// Remove elements 


let ul = document.querySelector('ul');

let li = document.createElement('li');

ul.append(li);

li.innerText = 'LIst'

li.remove();