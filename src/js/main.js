const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-link');
const close = document.querySelector('.close')

burger.addEventListener('click', () => {
    menu.style.transform = 'translateX(0%)'
})
close.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)'
})


const url = 'https://json-server-tan-kappa.vercel.app/products';


addPost()
async function addPost()  {
   const request = await fetch(url)
   const res = request.json()
   console.log(res);
}
