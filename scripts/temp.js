// /////////////////////////////////////////////////////////////////////////////////////////
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = ''
message.innerHTML = `cookies are delicious :-) <button 
class="btn btn--close-cookie">Got it!</button>`;

let header = document.querySelector('.header');
//header.prepend(message)
header.append(message);
//header.append(message.cloneNode(true))

//header.before(message);
//header.after(message)

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.parentElement.removeChild(message));

message.style.backgroundColor = 'black';
  message.style.width = '120%'
  



message.style.height = parseFloat(getComputedStyle(message).height) + 400 + 'px'

let kim = document.querySelector('body');
kim.style.backgroundImage = 'var(--wolfGrandient)'


// document.documentElement.style.setProperty('--wolfGrandient', 'var(--gradient-secondary)')
// document.documentElement.style.setProperty('--color-primary', 'red')
// //////////////////////////////////////////////////////////////////////////////////////


let kimbo = {name: 'kim313'}

const logo = document.querySelector('.nav__logo')
// l(logo.alt)
// logo.alt = 'seventy seven'
// l(logo.alt)
// l(logo.src)
// l(logo.className)
// l(logo.builder)

// l(logo.getAttribute('builder'))
// logo.setAttribute('banana', JSON.stringify(kimbo) )
// l(JSON.parse(logo.getAttribute('banana')))
// l(logo.getAttribute('src'))
// l(logo.src)
// l(logo.getAttribute('src'))
// l(logo.className)
// l(logo.getAttribute('class'))



// //////////////////////////////////////////////////////////////////////////////////////
// data attributes


// logo.dataset.kimbo = JSON.stringify(kimbo) 
// console.dir(typeof logo.dataset.kimbo)
// l(logo.dataset.kimbo)
// l(JSON.parse(logo.dataset.kimbo))

// logo.classList.add('test', 'a', 'b', 'c')
// logo.classList.contains('test')

// logo.classList.forEach(v=>l(v))

// logo.className = 'wolf'
// l(logo)
// //////////////////////////////////////////////////////////////////////////////////////

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
  // l(visualViewport.height)
  // l(document.documentElement.clientHeight)
  // l(document.documentElement.clientWidth)
  //window.scrollTo(0, s1.top + window.pageYOffset)
  // window.scrollTo({left:0, top:1082, behavior: 'smooth'})
section1.scrollIntoView({behavior: 'smooth'})

});

export let script2 = 'script2';


// //////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// let testState = true;

let  span = document.querySelector('.wolfgang');
 
let  HH1 = document.querySelector('h1');

const wolfArrow1 = (param1) => {
   l(param1.target)


 //HH1.removeEventListener('mouseenter', wolfArrow1);
};

HH1.addEventListener('mouseenter', wolfArrow1);
span.addEventListener('mouseenter', wolfArrow1);


// setTimeout(()=>{  HH1.removeEventListener('mouseenter', wolfArrow1)}, 5000)


// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
let temp = 0
let randomRum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomColor = () =>
  ` rgb(${randomRum(0, 255)}, ${randomRum(0, 255)}, ${randomRum(0, 255)})`;
//  /////////////////////////////////////////////////////////////////////////////////////////
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   l('link', e.target, e.currentTarget);
//   e.currentTarget.style.backgroundColor = randomColor();
//   ++temp
  
//  //e.stopPropagation();
// }, );

// /////////////////////////////////////////////////////////////////////////////////////////
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     e.target.style.backgroundColor = randomColor();
//   ++temp
//   l('link', e.target, e.currentTarget);
//   //e.stopPropagation();
// }, {once: false});
// /////////////////////////////////////////////////////////////////////////////////////////
// // document.querySelector('.nav__links').addEventListener('click', function (e) {
// //     ++temp
// //     l(`'wolfgang'${temp}`);
// // }, true);
// /////////////////////////////////////////////////////////////////////////////////////////
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   ++temp
//   l('link', e.target, e.currentTarget);
//    //e.stopPropagation();
// },);
// /////////////////////////////////////////////////////////////////////////////////////////
// document.querySelector('body').addEventListener('click', function (e) {
//     e.target.style.border =`2px dotted ${randomColor()}`;
// l(e.target)
//   ++temp
//   //l('body', e.target, e.currentTarget);
//    //e.stopPropagation();
// },);

// /////////////////////////////////////////////////////////////////////////////////////////
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
let lectures = 'lectures';

export { lectures };

// /////////////////////////////////////////////////////////////////////////////////////////
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
// /////////////////////////////////////////////////////////////////////////////////////////

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
      e.target.classList.contains('nav__link')
    ) {
      document
        .querySelector(e.target.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  },
  '.nav__links'
);



// /////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////

// get h1 element   
let h1 = document.querySelector('h1');

// l(h1.querySelectorAll('.highlight'));
// l(h1.childNodes);
// l(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// l(h1.parentNode);
// l(h1.parentElement);

h1.closest('.header').style.background = 'var(--wolfGrandient)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// l(h1.previousElementSibling);
// l(h1.nextElementSibling);
// l(h1.previousSibling);
// l(h1.nextSibling);
// l(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//     l(el)
//     el !== h1 && (el.style.border = `10px solid ${randomColor()}`);
// });


// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////

let header = document.querySelector('header');
// let temp1 = header.lastElementChild.children;
// let temp2 = header.firstElementChild;
// let temp3 = temp1[0].cloneNode(false);
// temp3.style.backgroundColor = `${randomColor()}`;
// temp3.textContent = 'Wolfgang Bergin';
// temp2.style.border = `5px dotted ${randomColor()}`;
// temp2.appendChild(temp3);
// let temp4 = header.closest('header')
// temp4.style.backgroundColor = `${randomColor()}`;

// let temp5 = header.nextElementSibling;
// temp5.style.backgroundColor = `${randomColor()}`;

// temp5.previousElementSibling.style.backgroundColor = `${randomColor()}`;
// temp5.nextElementSibling.style.backgroundColor = `${randomColor()}`;

// temp5.nextElementSibling.nextElementSibling.style.backgroundColor = `${randomColor()}`;
// temp5.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = `${randomColor()}`;
// temp5.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = `${randomColor()}`;
// l(temp5.nextSibling.nextSibling.previousSibling);


let temp6 = header.parentNode.parentNode.childNodes[1].children;
l(temp6);
for(const [key, ele] of Object.entries(temp6)){
    l(ele)
   !(ele === header ) && (ele.style.backgroundColor = `${randomColor()}`);
  
}


// let temp8 = document.querySelectorAll('section');
// l(temp8 );

// for(const [key, ele] of Object.entries(temp8)){
//     l(ele)
//     ele.style.backgroundColor = `${randomColor()}`;
// }

// for (const ele of temp8) {
//         ele.style.backgroundColor = `${randomColor()}`;
//     }
// Array.from(temp8).forEach(ele=>ele.style.backgroundColor = `${randomColor()}`)
// temp8.forEach(ele=>ele.style.backgroundColor = `${randomColor()}`)
// [...temp8].forEach(ele=>ele.style.backgroundColor = `${randomColor()}`)
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('nav__link')) return;

  const link = e.target;
  const silblings = link.closest('.nav').querySelectorAll('.nav__link');

  const logo = link.closest('.nav').querySelector('img');

  silblings.forEach((el) => {
    if (el !== link) {
        
        el.style.opacity = 0.3;
       
        
    }
    e.target.classList.add('red')
    logo.style.opacity = 0.3;
  });
  
});
nav.addEventListener('mouseout', function (e) {
    if (!e.target.classList.contains('nav__link')) return;

    const link = e.target;
    const silblings = link.closest('.nav').querySelectorAll('.nav__link');
  
    const logo = link.closest('.nav').querySelector('img');
  
    silblings.forEach((el) => {
      if (el !== link) {
          
          el.style.opacity = 1;
         
          
      }
        e.target.classList.remove('red')
      logo.style.opacity = 1;
    });
    
});
/////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////

const nav = document.querySelector('.nav');

const navFunction = function (e, param2, param3) {
    l(this)
    l(e)
    l(param2)
    l(param3)

    if (!e.target.classList.contains('nav__link')) return;
  const link = e.target;
  const silblings = link.closest('.nav').querySelectorAll('.nav__link');

  silblings.forEach((el) => {
    if (el !== link) {
      el.style.opacity = this
  el.style.transition = 'all .5s';
  e.type === 'mouseover' ? e.target.classList.add('red') : e.target.classList.remove('red');
  
    }
   
  });
};

//nav.addEventListener('mouseover',  navFunction.bind(0.1,));
nav.addEventListener('mouseover',  (e)=>navFunction.call('wolf212', e, 0.1, 'kim313'));
//nav.addEventListener('mouseout', (e)=>navFunction(e, 1, 'kim313'));



// /////////////////////////////////////////////////////////////////////////////////////////


let lectures = 'lectures';