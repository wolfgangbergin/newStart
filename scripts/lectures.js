'use strict';
import { script2 } from './script2.js';
// /////////////////////////////////////////////////////////////////////////////////////////

const kimSlideFive = document.createElement('div');
kimSlideFive.className = 'slide five';
kimSlideFive.innerHTML = ` <div class="testimonial">
<h5 class="testimonial__header">
  kim!!!
</h5>
<blockquote class="testimonial__text">
  kim!!! lorm ipsum dolor sit, amet consectetur adipisicing elit.
  Accusantium quas quisquam non? Quas voluptate nulla minima
  deleniti optio ullam nesciunt, numquam corporis et asperiores
</blockquote>
<address class="testimonial__author">
  <img src="img/img-2.jpg" alt="" class="testimonial__photo" />
  <h6 class="testimonial__name">Francisco Gomes</h6>
  <p class="testimonial__location">Lisbon, Portugal</p>
</address>
</div>`

// /////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('#section--3').scrollIntoView();

/////////////////////////////////////////////////////////////////////////////////////////
let slideNodeList = document.querySelectorAll('.slide');
let slider = document.querySelector('.slider');
slider.insertAdjacentElement('beforeend', kimSlideFive);
//slider.style.overflow = 'hidden';
//slider.style.transform = ' scale(0.8)';
let leftBtn = document.querySelector('.slider__btn--left');
let rightBtn = document.querySelector('.slider__btn--right');

// /////////////////////////////////////////////////////////////////////////////////////////
let tempWolf1 = Array.from(slideNodeList);


// /////////////////////////////////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////////////////////////////////////////
const slideFunc = function (paramA, paramB) {
  
  tempWolf1.splice(paramB, 0, ...tempWolf1.splice(paramA, 1));
  tempWolf1[0].className = 'slide left';
  tempWolf1[1].className = 'slide center';
  tempWolf1[2].className = 'slide right';
 
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

// /////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';

export { lectures };
