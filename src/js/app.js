//Mobile Menu in JS
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}
navSlide();


//Modal In Js 
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Email Valid
function validation() {
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const text = document.getElementById('text');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Your Email Address in Valid.";
        text.style.color = "#00ff00";
    }
    else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#f34f3f"
    }
}


// const form = document.getElementById('form');
// const email = document.getElementById('email');
// const text = document.getElementById('text');


// form.addEventListener('submit', e => {
//     e.preventDefault();
//     validate();
// })

// const validate = () => {
//     const emailVal = email.value.trim();
//     const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//     if (emailVal.match(pattern)) {
//         form.classList.add('valid');
//         form.classList.remove('invalid');
//         text.innerHTML = "Your Email Address in Valid.";
//         text.style.color = "#00ff00";
//     }

//     else {
//         form.classList.remove('valid');
//         form.classList.add('invalid');
//         text.innerHTML = "Please Enter Valid Email Address";
//         text.style.color = "#f34f3f"
//     }
// }