'use strict';
// /////////////////////////////////////////////////////////////////////////////////////////
globalThis.l = console.log;

globalThis.aGEL = function (type, callback, selector) {
  document.querySelector(selector).addEventListener(type, (e) => {
    e.preventDefault();
    callback(e);
  });
};

// /////////////////////////////////////////////////////////////////////////////////////////
aGEL(
  'click',
  function (e) {
    l(e.target);
  },
  'body'
);

let temp = 0;
let randomRum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomColor = () =>
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
      e.target.getAttribute('href')
    ) {
      document
        .querySelector(e.target.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  },
  '.nav__links'
);

// /////////////////////////////////////////////////////////////////////////////////////////

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     e.preventDefault();
//     e.target.style.backgroundColor = randomColor();
// if(e.target.getAttribute('href')) {
//     document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
// }
// });

// aGEL('click', (e, selector,) => {
//   e.preventDefault();
//   l(e.target)
//   if(e.target.getAttribute('href')) {
//     document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
// }
// }, '.nav__links', );

// /////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////
let lectures = 'lectures';

export { lectures };
