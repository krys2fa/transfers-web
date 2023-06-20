// Carousel functionality
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");

let currentIndex = 0;
const itemsToShow = 1;
let timer;

function slideCarousel() {
  if (carousel) {
    const itemWidth = carouselItems[currentIndex].offsetWidth;
    const transformValue = -itemWidth * currentIndex;
    carousel.style.transform = `translateX(${transformValue}px)`;
  }
}

function nextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  slideCarousel();
}

const startCarouselTimer = () => {
  timer = setInterval(() => {
    nextItem();
  }, 3000);
};

const stopCarouselTimer = () => {
  clearInterval(timer);
};

if (carousel) {
  carousel.addEventListener("mouseenter", stopCarouselTimer);
  carousel.addEventListener("mouseleave", startCarouselTimer);
}

const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
console.log("🚀 ~ file: script.js:39 ~ menu:", menu);

hamburgerMenu.addEventListener("click", function () {
  menu.classList.toggle("open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
