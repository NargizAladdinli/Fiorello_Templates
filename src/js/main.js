const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-link');
const close = document.querySelector('.close')

burger.addEventListener('click', () => {
    menu.style.transform = 'translateX(0%)'
})
close.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)'
})

const bata = [
    {
      id: 1,
      name: "Hand picked just for you",
      img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png",
    },
    {
      id: 2,
      name: "Unique flower arrangements",
      img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png",
    },
    {
      id: 3,
      name: "Best way to say you care.",
      img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png",
    },
  ];
  
  bata.map((user) => {
    const blum = `
    <div class="heart">
                                      <img src=${user.img} alt>
                                      <p class="two">${user.name}</p>
                                  </div>
    `;
    document.querySelector(".blum").insertAdjacentHTML("beforeend", blum);
  });