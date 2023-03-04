'use strict';
let section1 = document.querySelector('#section--1');

let btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', e => {
  let s1 = section1.getBoundingClientRect();
  l(s1);
  // l(e.target.getBoundingClientRect())
  // l('curent scroll',window.pageXOffset, window.pageYOffset)
  // l(visualViewport)
  // l(visualViewport.width)
  //  l(visualViewport.height)
  // l(document.documentElement.clientHeight)
  // l(document.documentElement.clientWidth)
  //window.scrollTo(0, s1.top + window.pageYOffset)
  //window.scrollTo(0, visualViewport.height )
  // window.scrollTo({left:0, top:1082, behavior: 'smooth'})
  section1.scrollIntoView({behavior: 'smooth'})

});

export let script2 = 'script2';
