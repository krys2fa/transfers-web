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
const itemsToShow = 3;
let timer;

function slideCarousel() {
  const itemWidth = carouselItems[currentIndex].offsetWidth + 20;
  const transformValue = -itemWidth * currentIndex;
  carousel.style.transform = `translateX(${transformValue}px)`;
}

function nextItem() {
  currentIndex++;
  if (currentIndex === carouselItems.length) {
    currentIndex = 0;
    carousel.style.transition = "none";
    slideCarousel();
  } else {
    carousel.style.transition = "transform 0.3s ease-in-out";
    slideCarousel();
  }
}

function previousItem() {
  currentIndex--;
  if (currentIndex === -1) {
    currentIndex = carouselItems.length - 1;
    carousel.style.transition = "none";
    slideCarousel();
  } else {
    carousel.style.transition = "transform 0.3s ease-in-out";
    slideCarousel();
  }
}

function startCarouselTimer() {
  timer = setInterval(() => {
    nextItem();
  }, 3000);
}

function stopCarouselTimer() {
  clearInterval(timer);
}

prevBtn.addEventListener("click", () => {
  previousItem();
  stopCarouselTimer();
});

nextBtn.addEventListener("click", () => {
  nextItem();
  stopCarouselTimer();
});

document.addEventListener("DOMContentLoaded", () => {
  slideCarousel();
  startCarouselTimer();
});

carousel.addEventListener("mouseenter", stopCarouselTimer);
carousel.addEventListener("mouseleave", startCarouselTimer);
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.add("active");
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("active");
  });
});
