'use strict';

// /////////////////////////////////////////////////////////////////////////////////////////
globalThis.l = console.log;

globalThis.aGEL = function (type, callback, selector) {
  document.querySelector(selector).addEventListener(type, (e) => {
    
    callback(e);
    e.preventDefault();
  });
};

// /////////////////////////////////////////////////////////////////////////////////////////

let section1 = document.querySelector('#section--1');

let btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({behavior: 'smooth'})

});
// /////////////////////////////////////////////////////////////////////////////////////////
// aGEL(
//   'click',
//   function (e) {
//     l(e.target);
//   },
//   'body'
// );

let temp = 0;
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
  l(e.target.dataset.wolfgangBergin);
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



export let script2 = 'script2';
