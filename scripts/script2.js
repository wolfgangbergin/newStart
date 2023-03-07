'use strict';
let section1 = document.querySelector('#section--1');

let btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({behavior: 'smooth'})

});

// document.querySelector('#wolf').addEventListener('click', function (e) {
//   e.preventDefault();

//   let id = this.getAttribute('href');
//   l(e.currentTarget === this)
//   document.querySelector(id).scrollIntoView({behavior: 'smooth'})
// });

// document.querySelectorAll('.nav__link').forEach(ele=>ele.addEventListener('click', function (e) {
//   e.preventDefault();

//   document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
// }))


// document.querySelectorAll('.nav__link').forEach(ele=>{
//   aGEL('click', '.nav__link', (e,) => {
//     e.preventDefault();
//     document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
      
//   }  )
// })


export let script2 = 'script2';
