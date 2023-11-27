function removeSecondElement() {
    document.querySelector('.box-2').hidden = true;
}
let box_3 = document.querySelector('.box-3');

function eventFunction()
{
   box_3.style.backgroundColor = 'blue';
}

box_3.addEventListener('click',eventFunction);

let box_4 = document.querySelector('.box-4');

function boxShadow()
{
    box_4.style.boxShadow = '10px 10px 10px blue';
}

box_4.addEventListener("mouseover", boxShadow);

