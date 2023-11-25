// styling elements 

let heading = document.querySelector('h1');

heading.style.color = 'blue';

let listItems = document.querySelectorAll('li');

for(let value of listItems)
{
    value.style.color = 'green';
}

// Adding elements 

let unorderedList = document.querySelector('ul');

let h1 = document.createElement('h1');

unorderedList.append(h1);

//Modify text 

let firstListItem = document.querySelector('li');

console.log(firstListItem.innerHTML);
console.log(firstListItem.textContent);
console.log(firstListItem.innerText);

h1.innerText = 'chetan';

