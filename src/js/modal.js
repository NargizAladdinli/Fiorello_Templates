//Modal In Js
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
