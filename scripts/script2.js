'use strict';
import { loadImg } from "./lectures.js";

window.l = console.log;
window.d = console.dir;
// /////////////////////////////////////////////////////////////////////////////////////////
// global custom function for adding event listener 

globalThis.aGEL = function (type, callback, selector) {
  document.querySelector(selector).addEventListener(type, (e) => {
    
    callback(e);
    e.preventDefault();
  });
};

// /////////////////////////////////////////////////////////////////////////////////////////
// dom elements
//const section1 = document.querySelector('#section--1')
const sections = document.querySelectorAll('.section');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height
const header = document.querySelector('header');
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
const revealSection = (entries, observer, ) => {
if (entries[0].isIntersecting) {
  //loadImg()
  entries[0].target.classList.remove('section--hidden') 
} else{
  entries[0].target.classList.add('section--hidden');
}
    
    

};

const obvOption = {
root: null,
threshold: 0.3,
};



sections.forEach((section) => {
new IntersectionObserver(
 revealSection,
  obvOption
).observe(section);
section.classList.add('section--hidden');
});

// /////////////////////////////////////////////////////////////////////////////////////////










// /////////////////////////////////////////////////////////////////////////////////////////
// navbar sticky function
const obsCallBack = (entries) => {
  entries[0].isIntersecting
    ? nav.classList.remove('sticky')
    : nav.classList.add('sticky');
};

const obvOptionNav = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(obsCallBack, obvOptionNav);

headerObserver.observe(header);

// /////////////////////////////////////////////////////////////////////////////////////////



let btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({behavior: 'smooth'})

});

/////////////////////////////////////////////////////////////////////////////////////////

let randomRum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

globalThis.randomColor = () =>
  ` rgb(${randomRum(0, 255)}, ${randomRum(0, 255)}, ${randomRum(0, 255)})`;

aGEL(
  'click',
  (e) => {
    e.target.style.backgroundColor = ` ${randomColor()}`;
  },
  '.btn--show-modal'
);
// /////////////////////////////////////////////////////////////////////////////////////////
aGEL(

  'click',
  (e) => { 
  
    if (
      !(e.target.getAttribute('href') === '#') &&
      e.target.classList.contains('nav__link')
    ) {
      document
        .querySelector(e.target.getAttribute('wolfgangBergin'))
        .scrollIntoView({ behavior: 'smooth' });
       
    }

  },
  '.nav__links'
);
// /////////////////////////////////////////////////////////////////////////////////////////



aGEL('click', (e) => {
    
  const operationsContent = document.querySelectorAll('.operations__content');
  const button = e.target.closest('button');
  if (!button) return;
  [...e.currentTarget.children].forEach((ele) =>
      ele.classList.remove('operations__tab--active')
  );
  Array.from(operationsContent).forEach((ele) => {
      ele.classList.remove(`operations__content--active`);
  });
  Array.from(operationsContent);
  button.classList.add('operations__tab--active');
  const temp1 = document.querySelector(
      `.operations__content--${button.dataset.tab}`
  );
  
  temp1.classList.add(`operations__content--active`);
}, '.operations__tab-container');




// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////



const navFunction = function (e) {
  if (!e.target.classList.contains('nav__link')) return;
  const link = e.target;
  const silblings = link.closest('.nav').querySelectorAll('.nav__link');
  silblings.forEach((el) => {
    if (el !== link) {
      // el.style.opacity = e.type === 'mouseover' ? 0.3 : 1;
      el.style.transition = 'all .5s';
      e.type === 'mouseover'
        ? e.target.classList.add('red')
        : e.target.classList.remove('red');
    }
  });
};



aGEL('mouseover', navFunction,'.nav')
aGEL('mouseout', navFunction,'.nav')
// /////////////////////////////////////////////////////////////////////////////////////////


export let script2 = 'script2';
