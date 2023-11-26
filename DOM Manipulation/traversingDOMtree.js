const li = document.querySelector('li');
console.log(li);
li.innerText = 'list 1';

//traversing parent node

console.log(li.parentNode);
console.log(li.parentElement);

console.log(li.parentElement.parentElement.parentElement.parentElement.parentElement);
console.log(li.parentNode.parentNode.parentNode.parentNode.parentNode);

//child node 

const ul = document.querySelector('ul');

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].innerText = 'Fuck You';

console.log(ul.children);
console.log(ul.firstElementChild.innerHTML);
console.log(ul.lastElementChild.innerText);

ul.children[0].innerText = 'list 1';

console.log(ul);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);
