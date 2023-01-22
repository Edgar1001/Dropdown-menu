

let menu = document.querySelectorAll("nav > ul > li");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", function () {
    this.querySelector("ul").style.display = "block";
  });
  menu[i].addEventListener("mouseout", function () {
    this.querySelector("ul").style.display = "none";
  });
}