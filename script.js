document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.style.color = "#fff";
    }
  });
});

$(document).ready(function () {
  $(".clickable-image").on("click", function () {
    var imageSrc = $(this).data("image-src");
    $("#imageModal").find(".maximized-image").attr("src", imageSrc);
  });
});
