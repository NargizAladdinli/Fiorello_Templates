const human = [
  {
    id: 1,
    name: "CRYSTAL BROOKS",
    position: "Florist",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-1.png",
  },
  {
    id: 2,
    name: "SHIRLEY HARRIS",
    position: "Manager",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-team-img-2.png",
  },
  {
    id: 3,
    name: "BEVERLY CLARK",
    position: "Florist",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-3.png",
  },
  {
    id: 4,
    name: "AMANDA WATKINS",
    position: "Florist",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-4.png",
  },
];

human.map((user) => {
  const cards = `

    <div class="col-lg-3 col-sm-6">
    <a href='#'>
    <div class="img">
                                <img src=${user.imgUrl} alt>
                            </div>
                            <div class="txt">
                                <h6>${user.name}</h6>
                                <span>${user.position}</span>
                            </div>
    </a>              
    </div>
    
    `;
  document.querySelector(".cardz").insertAdjacentHTML("beforeend", cards);
});