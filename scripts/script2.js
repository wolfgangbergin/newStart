'use strict';
let section1 = document.querySelector('#section--1');

let btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({behavior: 'smooth'})

});

export let script2 = 'script2';
