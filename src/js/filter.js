const filter = document.querySelectorAll(".listes li a");
const slice = document.querySelectorAll(".slice");

filter.forEach((i) => {
    i.onclick = () => {
      filter.forEach((btn) => {
        btn.className = " ";
      });
      i.className = "fix";
  
      const value = i.textContent;
  
      slice.forEach((item) => {
        item.style.display = "none";
        if (item.getAttribute("data-name") === value || value === "All") {
          item.style.display = "block";
        }
      });
    };
  });