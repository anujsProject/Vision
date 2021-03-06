let slideNo = 1;
let slides = Array.from(document.querySelectorAll(`.header__img-item`));
slides[0].style.visibility = "visible";

const moveSlide = (n) => {
  let current, next;
  let animateSlides = {
    forCurrent: "",
    forNext: "",
  };

  if (n > slideNo) {
    if (n > slides.length) n = 1;
    animateSlides.forCurrent = "curRightLeft";
    animateSlides.forNext = "nextRightLeft";
  } else if (n < slideNo) {
    if (n == 0) n = slides.length;
    animateSlides.forCurrent = "curLeftRight";
    animateSlides.forNext = "nextLeftRight";
  }

  slides.forEach((el, i) => {
    el.style.visibility = "hidden";
    el.className = `header__img-item header__img-item--${i + 1}`;
  });

  current = slideNo;
  next = n;

  slides[current - 1].classList.add(animateSlides.forCurrent);
  slides[next - 1].classList.add(animateSlides.forNext);

  slideNo = n;
};

const changeSlide = (plus) => {
  moveSlide(slideNo + plus);
};

document
  .querySelector(`.arr--prev`)
  .addEventListener("click", () => changeSlide(-1));
document
  .querySelector(`.arr--next`)
  .addEventListener("click", () => changeSlide(1));
