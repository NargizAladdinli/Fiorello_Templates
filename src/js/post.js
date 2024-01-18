const filter = document.querySelectorAll(".listes li a");

const data = [
  {
    id: 1,
    name: "CACTUSES",
    title: "MAJESTY PALM",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg",
    price: 259,
  },
  {
    id: 2,
    name: "POPULAR",
    title: "FOXGLOVE FLOWER",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg",
    price: 259,
  },
  {
    id: 3,
    name: "POPULAR",
    title: "SWEET ALYSSUM",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg",
    price: 259,
  },
  {
    id: 4,
    name: "POPULAR",
    title: "SPRING SNOWFLAKE",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg",
    price: 170,
  },
  {
    id: 5,
    name: "POPULAR",
    title: "SCARLET SAGE",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg",
    price: 159,
  },
  {
    id: 6,
    name: "CACTUSES",
    title: "ROCK SOAPWORT",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg",
    price: 259,
  },
  {
    id: 7,
    name: "VARIOUS",
    title: "SUMMER SAVORY",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg",
    price: 259,
  },
  {
    id: 8,
    name: "EXOTIC",
    title: "WILD ROSES",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg",
    price: 259,
  },
  {
    id: 9,
    name: "EXOTIC",
    title: "COLORFUL TULIPS",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-6-img.jpg",
    price: 350,
  },
  {
    id: 10,
    name: "VARIOUS",
    title: "WILD CACTUS",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-5-img.jpg",
    price: 159,
  },
  {
    id: 11,
    name: "VARIOUS",
    title: "PINK FLOWER TREE",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-4-img.jpg",
    price: 350,
  },
  {
    id: 12,
    name: "CACTUSES",
    title: "CACTUS IN ORANGE",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-3-img.jpg",
    price: 259,
  },
  {
    id: 13,
    name: "EXOTIC",
    title: "ORANGE AMARYLLIS",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-2-img.jpg",
    price: 259,
  },
  {
    id: 14,
    name: "GREENS",
    title: "SCHEFFLERA",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img.jpg",
    price: 259,
  },
];

data.map((user) => {
  const cards = `
        <div data-name=${user.name} class="slice col-sm-6 col-lg-3">
        <div class='cart'>
        <a href='#'>
        <div class="img">
        <img src=${user.imgUrl} alt>
        </div>
        <div class="text">
        <h6>${user.title}</h6>
        <div class="add">
        <a href="#" class="tocart">Add to cart</a>
        <span>$${user.price}</span>
        </div>
        </div>
        </a>
        </div>
        </div>
        `;

  document.querySelector(".cards").insertAdjacentHTML("beforeend", cards);
});

slice = document.querySelectorAll(".slice");
console.log(slice);

filter.forEach((i) => {
  i.onclick = () => {
    filter.forEach((btn) => {
      btn.className = " ";
    });
    i.className = "fix";

    const value = i.textContent

    slice.forEach((item) => {
      item.style.display = 'none';
      if(item.getAttribute('data-name') === value || value === "All"){
        item.style.display = 'block'
      }
    })
  };
});
