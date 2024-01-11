const url = "http://localhost:3000";

async function getCategroryList() {
  await fetch(`${url}/categoryList`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((user) => {
        const list = `
            <li>
                <a href="#">${user.name}</a>
            </li>
            `;

        document.querySelector(".listes").insertAdjacentHTML("beforeend", list);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

getCategroryList();



async function getCategrory() {
  await fetch(`${url}/category`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((user) => {
        const cards = `
        <div class="col-lg-3 col-sm-6 g-3 col-12">
        <div class="img">
            <img src=${user.imgUrl} alt>
        </div>
        <div class="text">
            <h6>FOXGLOVE FLOWER</h6>
            <a href="#">Add to cart</a>
            <p>$259</p>
        </div>
    </div>
            `;

        document.querySelector(".cards").insertAdjacentHTML("beforeend", cards);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

getCategrory();
