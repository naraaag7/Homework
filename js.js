document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("interactiveButton");
  
    button.addEventListener("click", function () {
      if (button.style.backgroundColor === "lightsteelblue") {
        button.style.backgroundColor = "yellow";
        button.style.margin = "2vw";
      } else {
        button.style.backgroundColor = "lightsteelblue";
        button.style.margin = "1vw";
      }
    });
  });