// getting all of our slide divs with querySelectorAll
let slideImages = document.querySelectorAll(".slide");

// getting our buttons
let prevBtn = document.querySelector(".arrow-left");
let nextBtn = document.querySelector(".arrow-right");

// defining a variable for our slideImages index
let current = 0;

// in here we are making sure
// none of the slides are shown
const reset = () => {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }
};

// in here we start with the first slide
const startSlide = () => {
  // we have to call reset everty time
  // we run our functions otherwise
  // display remains block and
  // function won't work correctly
  reset();
  slideImages[0].style.display = "block";
};

// function for decreasing the current
// also means going back to our previous slides
const prevSlide = () => {
  reset();
  slideImages[current - 1].style.display = "block";
  current--;
};

// the click event for going back to our previous slides
prevBtn.addEventListener("click", () => {
  // we have to make sure our current
  // don't go past 0 by setting it to the last index
  if (current === 0) {
    current = slideImages.length;
  }

  //this is where we run our function
  prevSlide();

  intervalManager();
});

// function for increasing the current
// which also means going forward to our next slides
const nextSlide = () => {
  reset();
  slideImages[current + 1].style.display = "block";
  current++;
};

// we have to make sure our current
// don't go past the last index by setting it to 0
const setNextSlide = () => {
  if (current === slideImages.length - 1) {
    current = -1;
  }
};

// the click event for going forward to our next slides
nextBtn.addEventListener("click", () => {
  setNextSlide();
  nextSlide();

  // every time we click the next icon
  // we clear our intervalID
  // and set it again
  intervalManager();
});

startSlide();

// we'll put our setInterval in here
let intervalID = null;

// in here slider will change automatically
// every 3 seconds and go to the next slide
const intervalManager = () => {
  clearInterval(intervalID);

  intervalID = setInterval(() => {
    setNextSlide();
    nextSlide();
  }, 3000);
};

intervalManager();
