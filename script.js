document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.style.color = "#fff";
    }
  });
});

$(document).ready(function () {
  $(".img").click(function () {
    $("#modal-img").attr("src", this.src);
    $("#imageModal").modal("show");
  });
});
