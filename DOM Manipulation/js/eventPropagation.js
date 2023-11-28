window.addEventListener('click', () => {
    console.log('windows');
},false)
document.addEventListener('click', () => {
    console.log('document');
},false)

document.querySelector('div').addEventListener('click', () => {
    console.log('div 1');
},false)

document.querySelector('.box-2').addEventListener('click', (e) => {
    console.log('div 2');
    // e.stopPropagation();
},{once:true})


document.querySelector('button').addEventListener('click', (e) => {
    console.log(e.target.innerText = 'Clicked!');
},false)

document.querySelector('a').addEventListener('click',(e)=>{
    e.preventDefault();
})