let slideImages = document.querySelectorAll(".slide"),
  prevBtn = document.querySelector(".arrow-left"),
  nextBtn = document.querySelector(".arrow-right"),
  current = 0;

const reset = () => {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }
};

const startSlide = () => {
  reset();
  slideImages[0].style.display = "block";
};

const prevSlide = () => {
  reset();
  slideImages[current - 1].style.display = "block";
  current--;
};

prevBtn.addEventListener("click", () => {
  if (current === 0) {
    current = slideImages.length;
  }
  prevSlide();
});

const nextSlide = () => {
  reset();
  slideImages[current + 1].style.display = "block";
  current++;
};

const setSlide = () => {
  if (current === slideImages.length - 1) {
    current = -1;
  }
};

nextBtn.addEventListener("click", () => {
  setSlide();
  nextSlide();
  if (automate) {
    clearInterval(intervalID);

    intervalID = setInterval(() => {
      setSlide();
      nextSlide();
    }, 3000);
  }
});

startSlide();

let intervalID = null;

let automate = true;

if (automate) {
  clearInterval(intervalID);

  intervalID = setInterval(() => {
    setSlide();
    nextSlide();
  }, 3000);
}
