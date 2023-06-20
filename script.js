// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   menu.classList.toggle("active");
// });

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

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll(".section");

function toggleMenu() {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
}

function scrollToSection(e) {
  e.preventDefault();
  closeMenu();
  const targetId = e.target.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }
}

hamburger.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
sections.forEach((section) => {
  section.addEventListener("click", closeMenu);
});
