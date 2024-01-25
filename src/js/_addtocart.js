let addcart = document.querySelectorAll('.tocart');
console.log(addcart);

for(let i=0; i < addcart.length; i++){
    addcart[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    console.log(productNumbers);
    localStorage.setItem('cartNumbers',1)
}