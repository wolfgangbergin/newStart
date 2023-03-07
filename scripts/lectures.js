'use strict';
// /////////////////////////////////////////////////////////////////////////////////////////

globalThis.l = console.log;
globalThis.aGEL = function (type,  callback, selector,) {
    document.addEventListener(type, (e) => {
      callback(e, selector,);
    });
  }

  document.addEventListener('click', function (e) {
   
    l(e.target)
     
    
    },);
// /////////////////////////////////////////////////////////////////////////////////////////

let temp = 0;
let randomRum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomColor = () =>
  ` rgb(${randomRum(0, 255)}, ${randomRum(0, 255)}, ${randomRum(0, 255)})`;

aGEL('click', (e, selector,) => {
 
    if (e.target.matches(selector,)) {
      e.target.style.backgroundColor = ` ${randomColor()}`;
    }
  }, '.btn--show-modal', );
// /////////////////////////////////////////////////////////////////////////////////////////


// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     e.preventDefault();
//     e.target.style.backgroundColor = randomColor();
// if(e.target.getAttribute('href')) {
//     document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
// }
// });


aGEL('click', (e, selector,) => {
  e.preventDefault();
  l(e.target)
  if(e.target.getAttribute('href')) {
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
}
}, '.nav__links', );



 

// /////////////////////////////////////////////////////////////////////////////////////////



// /////////////////////////////////////////////////////////////////////////////////////////
let lectures = 'lectures';

export { lectures };
