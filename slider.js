let slideImages = document.querySelectorAll(".slide"),
  prevBtn = document.querySelector(".arrow-left"),
  nextBtn = document.querySelector(".arrow-right"),
  current = 0;

function reset() {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  slideImages[0].style.display = "block";
}

function prevSlide() {
  reset();
  slideImages[current - 1].style.display = "block";
  current--;
}

prevBtn.addEventListener("click", () => {
  if (current === 0) {
    current = slideImages.length;
  }
  prevSlide();
});

function nextSlide() {
  reset();
  slideImages[current + 1].style.display = "block";
  current++;
}

nextBtn.addEventListener("click", () => {
  if (current === slideImages.length - 1) {
    current = -1;
  }
  nextSlide();
});

startSlide();
