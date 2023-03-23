'use strict';


const sliderFunc = function () {
// /////////////////////////////////////////////////////////////////////////////////////////

const kimSlideFive = document.createElement('div');
kimSlideFive.className = 'slide four';
kimSlideFive.innerHTML = ` <div class="testimonial">
<h5 class="testimonial__header">
  kim!!!
</h5>
<blockquote class="testimonial__text">
  kim!!! lorm ipsum dolor sit, amet consectetur adipisicing elit.
  Accusantium quas quisquam non? Quas voluptate nulla minima
  deleniti optio ullam nesciunt, numquam corporis et asperiores
  voluptatem, quia, quibusdam voluptas. Quis, quod.
  deleniti optio ullam nesciunt, numquam corporis et asperiores
  voluptatem, quia, quibusdam voluptas. Quis, quod.
</blockquote>
<address class="testimonial__author">
  <img src="img/img-4.jpg" alt="" class="testimonial__photo" />
  <h6 class="testimonial__name">Francisco Gomes</h6>
  <p class="testimonial__location">Lisbon, Portugal</p>
</address>
</div>`;

// /////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('#section--3').scrollIntoView();

/////////////////////////////////////////////////////////////////////////////////////////
const dotsContainer = document.querySelector('.dots');

let slider = document.querySelector('.slider');
slider.insertAdjacentElement('beforeend', kimSlideFive);
let slideNodeList = document.querySelectorAll('.slide');

slideNodeList.forEach((ele, i) => {
  ele.dataset.slide = i;
});
//slider.style.overflow = 'hidden';
//slider.style.transform = ' scale(0.8)';
let leftBtn = document.querySelector('.slider__btn--left');
let rightBtn = document.querySelector('.slider__btn--right');

let tempWolf1 = Array.from(slideNodeList);
// /////////////////////////////////////////////////////////////////////////////////////////

const makeDots = function () {
  slideNodeList.forEach((ele, i) => {
    dotsContainer.insertAdjacentHTML(
      `beforeend`,
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

// /////////////////////////////////////////////////////////////////////////////////////////

const activeDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach((dot) => {
    dot.classList.remove('dots__dot--active');
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
/////////////////////////////////////////////////////////////////////////////////////////
dotsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;

    //slideFunc(slide, 0);
    activeDot(slide);
  }
});
// /////////////////////////////////////////////////////////////////////////////////////////
const slideFunc = function (paramA, paramB) {
  tempWolf1.splice(paramB, 0, ...tempWolf1.splice(paramA, 1));
  tempWolf1[0].className = 'slide zero';
  tempWolf1[1].className = 'slide one';
  tempWolf1[2].className = 'slide two';
  tempWolf1[3].className = 'slide three';
  tempWolf1[4].className = 'slide four';

  let temp = document.querySelector('.slide.two');

  activeDot(temp.dataset.slide);
};
// /////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////
rightBtn.addEventListener('click', (e) => {
  slideFunc(0, tempWolf1.length - 1);
});
// /////////////////////////////////////////////////////////////////////////////////////////
leftBtn.addEventListener('click', (e) => {
  slideFunc(tempWolf1.length - 1, 0);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    slideFunc(0, tempWolf1.length - 1);
  } else if (e.key === 'ArrowLeft') {
    slideFunc(tempWolf1.length - 1, 0);
  }
});
// /////////////////////////////////////////////////////////////////////////////////////////
const init = function () {
  makeDots();
  activeDot(2);
};
init();
};
// /////////////////////////////////////////////////////////////////////////////////////////


export { sliderFunc };
