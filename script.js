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

// Function to fetch and display images
function displayImages() {
  var gallery = document.getElementById("img-container");

  // Path to the folder containing images
  var folderPath = "/img/tamale/";

  // Fetch the list of images from the folder
  fetchImages(folderPath)
    .then((images) => {
      // Create image elements and append them to the gallery
      images.forEach((image) => {
        var colDiv = document.createElement("div");
        colDiv.className =
          "col-md-3 d-flex justify-content-center align-items-center mb-2 flex-column";

        var imgElement = document.createElement("img");
        imgElement.className = "img img-fluid";
        imgElement.src = image;
        imgElement.alt = "Description for " + image;

        // Add click event to open modal
        imgElement.addEventListener("click", function () {
          openModal(image, imgElement.alt);
        });

        colDiv.appendChild(imgElement);
        gallery.appendChild(colDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
}

// Function to fetch the list of images from the folder
function fetchImages(folderPath) {
  return new Promise((resolve, reject) => {
    fetch(folderPath)
      .then((response) => response.text())
      .then((html) => {
        var doc = new DOMParser().parseFromString(html, "text/html");
        var links = doc.querySelectorAll(
          'a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]'
        );

        var imageNames = Array.from(links).map((link) =>
          link.getAttribute("href")
        );
        resolve(imageNames);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Function to open the modal
function openModal(image, caption) {
  var modalImage = document.getElementById("modalImage");
  var modalCaption = document.getElementById("imageModalLabel");

  modalImage.src = image;
  modalImage.alt = caption;
  modalCaption.textContent =
    "TRANSFER(S): From Osnabrück to Tamale, Public programme at Red Clay, November 28-1 December 2023, " +
    decodeURIComponent(image.substring(12, image.indexOf("_")));

  $("#imageModal").modal("show");
}

// Call the displayImages function to show images on page load
displayImages();
