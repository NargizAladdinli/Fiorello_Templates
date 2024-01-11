const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-link');
const close = document.querySelector('.close')

burger.addEventListener('click', () => {
    menu.style.transform = 'translateX(0%)'
})
close.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)'
})