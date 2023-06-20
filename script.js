const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

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
