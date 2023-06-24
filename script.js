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
const navLinks = document.querySelectorAll(".nav ul li a");

hamburgerMenu.addEventListener("click", function () {
  menu.classList.toggle("open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function scrollToSection(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");

  if (targetId.startsWith("#")) {
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
  } else {
    window.location.href = targetId;
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

// Get the current scroll position
const scrollPosition = window.pageYOffset;

// Loop through each section
document.querySelectorAll("section").forEach(function (section) {
  // Get the ID of the section
  const sectionId = section.getAttribute("id");

  // Get the corresponding navigation link
  const navLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

  // Get the offset top position of the section
  const sectionOffsetTop = section.offsetTop;
  // Get the height of the section
  const sectionHeight = section.offsetHeight;

  // Check if the current scroll position is within the section
  if (
    scrollPosition >= sectionOffsetTop &&
    scrollPosition < sectionOffsetTop + sectionHeight
  ) {
    // Add the active class to the navigation link
    navLink.classList.add("active-link");
  } else {
    // Remove the active class from the navigation link
    navLink.classList.remove("active-link");
  }
});
