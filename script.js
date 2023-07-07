document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu li a");

  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.style.color = "#fff";
    }
  });
});
