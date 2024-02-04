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
    $("#imageModalLabel").text("TRANSFER(S): From Osnabrück to Tamale, Public programme at Red Clay, November 28-1 December 2023, " +
    decodeURIComponent(this.src.substring(this.src.indexOf('Photo'), this.src.indexOf("_"))));
    $("#imageModal").modal("show");
  });
});
