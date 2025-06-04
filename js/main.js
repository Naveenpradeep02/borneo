const menu = document.querySelector(".mobile-menu");

const OpenMenu = () => {
  menu.classList.add("show-menu");
  document.querySelector(".menu-open").classList.add("remove-icon");
  document.querySelector(".menu-close").classList.add("add-icon");
};
const CloseMenu = () => {
  menu.classList.remove("show-menu");
  document.querySelector(".menu-open").classList.remove("remove-icon");
  document.querySelector(".menu-close").classList.remove("add-icon");
};

const texts = document.querySelectorAll(".hero-text > div");
let index = 0;

setInterval(() => {
  texts[index].classList.remove("active");
  index = (index + 1) % texts.length;
  texts[index].classList.add("active");
}, 4000);
