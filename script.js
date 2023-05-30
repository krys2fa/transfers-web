// Add smooth scrolling to anchor links
document.querySelectorAll(".section-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add fade-in effect to sections
const sections = document.querySelectorAll(".section");
const options = {
  rootMargin: "0px",
  threshold: 0.5,
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    } else {
      entry.target.style.opacity = "0";
    }
  });
}, options);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function slideCarousel() {
  const itemWidth = carouselItems[currentIndex].offsetWidth;
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
}

function nextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  slideCarousel();
}

function previousItem() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  slideCarousel();
}

prevBtn.addEventListener("click", previousItem);
nextBtn.addEventListener("click", nextItem);

document.addEventListener("DOMContentLoaded", slideCarousel);
