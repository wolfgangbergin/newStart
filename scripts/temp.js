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
