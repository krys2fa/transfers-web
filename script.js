document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    if (link.href === window.location.href) {
      console.log("🚀 ~ file: script.js:9 ~ link:", link);

      link.style.color = "#fff";
    }
  });
});
