const url = "http://localhost:3000";

async function getCategroryList() {
  await fetch(`${url}/categoryList`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((user) => {
        const list = `
            <li class='lien'>
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
  const filter = document.querySelectorAll(".lien a");

async function getCategrory() {
  await fetch(`${url}/category`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.slice(0,8).forEach((user) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
}

getCategrory();


const slice = document.querySelectorAll('.slice');
console.log(filter);

filter.forEach((i) => {
  i.onclick = () => {
    filter.forEach((btn) => {
      btn.className = ' ';
    })
    i.className = 'fix'
  }
})


