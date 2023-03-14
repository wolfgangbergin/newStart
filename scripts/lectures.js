'use strict';

// /////////////////////////////////////////////////////////////////////////////////////////
let section1 = document.querySelector('#section--1');
section1.style="background:yellow";
let section1Top = section1.getBoundingClientRect().top;

let nav = document.querySelector('.nav');

// document.addEventListener("scroll", (e)=>{

//    if (window.scrollY > section1Top){
//     nav.classList.add('sticky')
//    }else{

//        nav.classList.remove('sticky')
//    }
// })

// /////////////////////////////////////////////////////////////////////////////////////////

let obsCallBack = function (entries, observer1) {
  entries.forEach((entry) => {
    D(entry);
    if(entry.isIntersecting){
        nav.classList.add('sticky')

    }else{
                nav.classList.remove('sticky')

    }
    
  });

};

let obsOptions = {
  root: null,
  threshold: .3,
 
};

const observer1 = new IntersectionObserver(obsCallBack, obsOptions);

observer1.observe(section1);

// /////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';

export { lectures };
