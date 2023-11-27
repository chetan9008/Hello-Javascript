let button = document.querySelector('.showIt');

let paragraph = document.querySelector('.hideMe');

function showPara()
{
    console.log(paragraph.classList.contains('show'));
    if(paragraph.classList.contains('show'))
    {
        paragraph.classList.remove('show');
    }
    else
    {
        paragraph.classList.add('show');
    }
}

button.addEventListener('click',showPara);