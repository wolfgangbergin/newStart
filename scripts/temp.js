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


