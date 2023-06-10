// Carousel functionality
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const itemsToShow = 2;
let timer;

function slideCarousel() {
  const itemWidth = carouselItems[currentIndex].offsetWidth + 20;
  const transformValue = -itemWidth * currentIndex;
  carousel.style.transform = `translateX(${transformValue}px)`;
}

const nextItem = () => {
  currentIndex++;
  if (currentIndex === carouselItems.length) {
    currentIndex = 0;
    carousel.style.transition = "none";
    slideCarousel();
  } else {
    carousel.style.transition = "transform 0.3s ease-in-out";
    slideCarousel();
  }
};

const previousItem = () => {
  currentIndex--;
  if (currentIndex === -1) {
    currentIndex = carouselItems.length - 1;
    carousel.style.transition = "none";
    slideCarousel();
  } else {
    carousel.style.transition = "transform 0.3s ease-in-out";
    slideCarousel();
  }
};

const startCarouselTimer = () => {
  timer = setInterval(() => {
    nextItem();
  }, 3000);
};

const stopCarouselTimer = () => {
  clearInterval(timer);
};

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

// Scroll functionality
const menuLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

const sectionLink = document.querySelector("#section");
console.log("🚀 ~ file: script.js:78 ~ sectionLink:", sectionLink);
sectionLink.addEventListener("click", scrollToSection);

function scrollToSection(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  const offsetTop = targetSection.offsetTop;
  const scrollOptions = {
    top: offsetTop,
    behavior: "smooth",
  };

  if ("scrollBehavior" in document.documentElement.style) {
    // Use smooth scrolling if supported
    window.scrollTo(scrollOptions);
  } else {
    // Use a polyfill for smooth scrolling
    smoothScrollTo(offsetTop, 800);
  }
}

function smoothScrollTo(to, duration) {
  const start = window.pageYOffset;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  }

  animateScroll();
}

// Easing equation for smooth scrolling
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

// Add 'active' class to the menu item corresponding to the current section
function setActiveMenuItem() {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (
      window.pageYOffset >= top - 60 &&
      window.pageYOffset < top + height - 60
    ) {
      const targetLink = document.querySelector(
        `nav ul li a[href="#${section.id}"]`
      );
      menuLinks.forEach((link) =>
        link.parentElement.classList.remove("active")
      );
      targetLink.parentElement.classList.add("active");
    }
  });
}

// Listen for scroll events and update the active menu item
window.addEventListener("scroll", setActiveMenuItem);
