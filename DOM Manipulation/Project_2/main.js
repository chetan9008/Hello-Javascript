let openBtn = document.getElementById('open-button');
let closeBtn = document.getElementById('close-button');
let modal = document.querySelector('.modal-container');


openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    console.log(e);
    if (e.target === modal)
        modal.style.display = 'none';

})


document.querySelector('.dialog').addEventListener('click', () => {
    document.querySelector('dialog').showModal();
})


document.querySelector('#close-dialog').addEventListener('click', () => {
    document.querySelector('dialog').close();
})