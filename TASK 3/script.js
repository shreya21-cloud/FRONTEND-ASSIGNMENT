
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
];

let index = 0;
const slideImg = document.getElementById("slideImg");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");


function showImage() {
  slideImg.src = images[index];
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  showImage();
});


prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showImage();
});


setInterval(() => {
  index = (index + 1) % images.length;
  showImage();
}, 3000);
