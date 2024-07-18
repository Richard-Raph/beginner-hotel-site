const menuToggle=document.querySelector('.toggle')
const header=document.querySelector('.header')
const menu=document.querySelector('.menu')
menuToggle.addEventListener('click', ()=> {
    menuToggle.classList.toggle('active')
    header.classList.toggle('active')
    menu.classList.toggle('active')
});
