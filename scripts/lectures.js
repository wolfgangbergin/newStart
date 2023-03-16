'use strict';
import { script2 } from './script2.js';
// /////////////////////////////////////////////////////////////////////////////////////////
//section1 = document.querySelector('#section--1');

// .section--hidden {
//   opacity: 0;
//   transform: translateY(8rem);
// }
/////////////////////////////////////////////////////////////////////////////////////////
const sections = document.querySelectorAll('.section');

// /////////////////////////////////////////////////////////////////////////////////////////
const obsCallBack = ( ele, ) => {
  return (entries,)=>{
    entries[0].isIntersecting
      ? ele.classList.remove('section--hidden')
      : ele.classList.add('section--hidden');
  }

};

const obvOption = {
  root: null,
  threshold: 0.3,
};



sections.forEach((ele) => {
  new IntersectionObserver(
    obsCallBack( ele, ),
    obvOption
  ).observe(ele);
});

// /////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';

export { lectures };
