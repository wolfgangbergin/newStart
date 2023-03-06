'use strict';
// /////////////////////////////////////////////////////////////////////////////////////////

globalThis.l = console.log;
globalThis.aGEL = function (type, selector, callback) {
    document.addEventListener(type, (e) => {
      if (e.target.matches(selector)) callback(e, selector);
    });
  }

// /////////////////////////////////////////////////////////////////////////////////////////

let temp = 0;
let randomRum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomColor = () =>
  ` rgb(${randomRum(0, 255)}, ${randomRum(0, 255)}, ${randomRum(0, 255)})`;
// /////////////////////////////////////////////////////////////////////////////////////////





aGEL('click', '.btn--show-modal', (e, selector) => {
    if (e.target.matches(selector)) {
      e.target.style.border = `4px dotted ${randomColor()}`;
    }
  });
  l(globalThis)

// /////////////////////////////////////////////////////////////////////////////////////////



// /////////////////////////////////////////////////////////////////////////////////////////
let lectures = 'lectures';

export { lectures };
