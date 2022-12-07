"use strict";
const slides = [
  {
    src: "1https://img.freepik.com/free-photo/misty-carpathian-mountain-landscape-with-fir-forest-the-tops-of-trees-sticking-out-of-the-fog_146671-18433.jpg?w=2000",
    alt: "img1",
  },
  {
    src: "https://static.bimago.pl/mediacache/catalog/product/cache/5/0/126805/image/750x1120/0cca0f1719b65c985166c3dada087fb4/126805_1.jpg",
    alt: "img1",
  },
  {
    src: "https://static.bimago.pl/mediacache/catalog/product/cache/0/1/144510/image/750x1120/fa44ebf959397fcad81797bade0206fd/144510_4.jpg",
    alt: "img1",
  },
  {
    src: "https://www.wallmur.com/media/catalog/pdata/cache/1/crop_image/1100x/040ec0/d/t/monochrome-mountainscape-with-misty-forest-wallpaper-mural-wm-dt000060-41484750.jpg",
    alt: "img1",
  },
];

const [preBtn, nextBtn] = document.querySelectorAll("button");
const sliderImg = document.querySelector(".sliderWrapper img");

// sliderImg.src = sliders[0].src;
// sliderImg.alt = sliders[0].alt;

let currentSlideIndex = 0;

updateSlider(currentSlideIndex);

sliderImg.src = slides[currentSlideIndex].src;
sliderImg.alt = slides[currentSlideIndex].alt;

preBtn.onclick = prevBtnHandler;

nextBtn.onclick = nextBtnHandler;

function prevBtnHandler() {
  // if (currentSlideIndex > 0) {
  //   currentSlideIndex--;
  // } else {
  //   currentSlideIndex = slides.length - 1;
  // }
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlider(currentSlideIndex);
  // sliderImg.src = slides[currentSlideIndex].src;
  // sliderImg.alt = slides[currentSlideIndex].alt;
}

function nextBtnHandler() {
  // if (currentSlideIndex < slides.length - 1) {
  //   currentSlideIndex++;
  // } else {
  //   currentSlideIndex = 0;
  // }
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlider(currentSlideIndex);
  // sliderImg.src = slides[currentSlideIndex].src;
  // sliderImg.alt = slides[currentSlideIndex].alt;
}

function updateSlider(currentSlideIndex) {
  sliderImg.src = slides[currentSlideIndex].src;
  sliderImg.alt = slides[currentSlideIndex].alt;

  sliderImg.onerror = () => {
    sliderImg.src = "./../img/error.jpg";
  };
}
