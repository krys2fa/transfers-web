const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const navLinks = document.querySelectorAll(".nav ul li a");

hamburgerMenu.addEventListener("click", function () {
  menu.classList.toggle("open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
