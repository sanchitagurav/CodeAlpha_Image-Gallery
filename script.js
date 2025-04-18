const galleryImages = document.querySelectorAll(".gallery img");
const preview = document.querySelector(".preview");
const fullImg = document.querySelector(".full-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage(index);
  });
});

function showImage(index) {
  fullImg.src = galleryImages[index].src;
  preview.classList.add("show");
}

closeBtn.addEventListener("click", () => {
  preview.classList.remove("show");
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});
