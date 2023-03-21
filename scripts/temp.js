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
// /////////////////////////////////////////////////////////////////////////////////////////

// let wolf313 = document.querySelector('#wolf313');
// wolf313.classList.add('wolf313');
// /////////////////////////////////////////////////////////////////////////////////////////
// let kim =function (param1,param2,e) {
//    l(`this: ${this}`)
//      l(`param1: ${param1}`)
//     l(`param2: ${param2}`)
//    l(`e: ${e}`)
//    //e.target.style.backgroundColor = ` ${randomColor()}`;
// };

/////////////////////////////////////////////////////////////////////////////////////////
//wolf313.addEventListener('click',(e)=>kim(e,1,2,3));
//wolf313.addEventListener('click',(e)=>kim.call(e.currentTarget , e ,'WOLF#!#'));
//wolf313.addEventListener('click', (e)=>kim.bind(e.currentTarget , e ,'WOLF#!#')(e));
//wolf313.addEventListener('click', (e)=> {kim.bind(e.currentTarget , e ,'WOLF#!#')()});
//wolf313.addEventListener('click', kim.bind( 'this' , 'jojo', 'kim212'));

// wolf313.addEventListener('click',function(e){
//    kim.bind( 'this' , 'jojo', 'kim212', )(e);
// } );


// let mick = kim.bind( 'this' , 'jojo', 'kim212');
// mick('fla');
// /////////////////////////////////////////////////////////////////////////////////////////


// let wolf313 = document.querySelector('#wolf313');
// wolf313.classList.add('wolf313');
// /////////////////////////////////////////////////////////////////////////////////////////
// let kim =function (param1,param2,) {
//     l(this)
//      l(`paramA: ${param1}`)
//     l(`paramB: ${param2}`)
//    //l(`Event: ${e}`)

//     return  (e)=> {
//         l(this)
//      l(`paramA: ${param1}`)
//     l(`paramB: ${param2}`)
//    l(`Event: ${e}`)
//     }
// };

// /////////////////////////////////////////////////////////////////////////////////////////
// //wolf313.addEventListener('click',(e)=>kim(e,1,2,3));
// //wolf313.addEventListener('click',(e)=>kim.call(e.currentTarget , e ,'WOLF#!#'));
// //wolf313.addEventListener('click', (e)=>kim.bind(e.currentTarget , e ,'WOLF#!#')(e));
// //wolf313.addEventListener('click', (e)=> {kim.bind(e.currentTarget , e ,'WOLF#!#')()});
// //wolf313.addEventListener('click', kim.bind( 'this' , 'jojo', 'kim212'));

// wolf313.addEventListener('click',function(e){
    
//    kim.call( this , 'a', 'b', )(e);
// } );


// let mick = kim.bind('this' , 'a', 'b',);
// //mick('C');
// console.dir(mick)
// /////////////////////////////////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////////////////////////////////////////
// D(this)
// D(window)

// /////////////////////////////////////////////////////////////////////////////////////////
window.table = 'wolf\'s table';

let cleanTable = function () {
    L(`cleaning ${window.table}!`)
}

 //cleanTable()

window.garage ={
    car1: 'BMW',
    table: 'garage table',
    cleanTable() {
        L(`cleaning ${this.table}!`)
    }
}

let jojosRoom ={ 
    table: 'jojo\'s table',
    cleanTable() {
        L(`cleaning ${this.table}!`)
    }
}

// console.dir(window.table)
// console.dir(window.garage.table)
// console.dir(jojosRoom.table)
// window.garage.cleanTable()
// jojosRoom.cleanTable()
//garage.cleanTable.calL(window)
// window.cleanTable = garage.cleanTable;
// window.cleanTable()
// /////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
let cleanTable = function (param1, param2) {
  L(this)
const innerFunc =  ()=> {
  L(`cleaning ${this.table} with ${param1} while eating an ${param2}!`);
};

innerFunc();
};



this.garage = {
table: 'garage table',
// cleanTable() {
//     L(`cleaning ${this.table}!`)
// }
};

let jojosRoom = {
table: "jojo's table",
// cleanTable() {
//     L(`cleaning ${this.table}!`)
// }
};

// console.dir(this.table)
// console.dir(this.garage.table)
// console.dir(jojosRoom.table)
// this.garage.cleanTable()
// jojosRoom.cleanTable()
//garage.cleanTable.calL(this)
// this.cleanTable = garage.cleanTable;
// this.cleanTable()

// cleanTable.call(this, 'soap')
// cleanTable.call(this.garage, 'soap')

//cleanTable.call(jojosRoom, 'soap', 'apple')

// let creatRoomFunc = function (name, table, color) {
//   this.name = name;
//   this.table = `${this.name}'s ${table}`;
//   this.color = color;
// };

// class creatRoomFunc{
//     constructor(name, table, color){
//       this.name = name;
//   this.table = `${this.name}'s ${table}`;
//   this.color = color;
//   //this.clean = cleanTable    
//     }
// }
// creatRoomFunc.prototype.clean = cleanTable
// let kim = new creatRoomFunc('kim', 'round table', 'red');
// let mic = new creatRoomFunc('mic', 'squar table', 'blue');

// mic.clean('soap', 'banana')
// kim.clean('soap', 'apple')


// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////


// let obsCallBack = function (entries, observer1) {
//   entries.forEach((entry) => {
//     D(entry);
//     if(entry.isIntersecting){
//         nav.classList.add('sticky')

//     }else{
//                 nav.classList.remove('sticky')

//     }

//   });

// };

// let obsOptions = {
//   root: null,
//   threshold: .3,

// };

// const observer1 = new IntersectionObserver(obsCallBack, obsOptions);

// observer1.observe(section1);
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// let section1 = document.querySelector('#section--1');

// let section1Top = section1.getBoundingClientRect().top;



// // document.addEventListener("scroll", (e)=>{

// //    if (window.scrollY > section1Top){
// //     nav.classList.add('sticky')
// //    }else{

// //        nav.classList.remove('sticky')
// //    }
// // })

// /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
let cleanTable = function (param1, param2) {
  L(this)
const innerFunc =  ()=> {
  L(`cleaning ${this.table} with ${param1} while eating an ${param2}!`);
};

innerFunc();
};



this.garage = {
table: 'garage table',
// cleanTable() {
//     L(`cleaning ${this.table}!`)
// }
};

let jojosRoom = {
table: "jojo's table",
// cleanTable() {
//     L(`cleaning ${this.table}!`)
// }
};

// console.dir(this.table)
// console.dir(this.garage.table)
// console.dir(jojosRoom.table)
// this.garage.cleanTable()
// jojosRoom.cleanTable()
//garage.cleanTable.calL(this)
// this.cleanTable = garage.cleanTable;
// this.cleanTable()

// cleanTable.call(this, 'soap')
// cleanTable.call(this.garage, 'soap')

//cleanTable.call(jojosRoom, 'soap', 'apple')

// let creatRoomFunc = function (name, table, color) {
//   this.name = name;
//   this.table = `${this.name}'s ${table}`;
//   this.color = color;
// };

// class creatRoomFunc{
//     constructor(name, table, color){
//       this.name = name;
//   this.table = `${this.name}'s ${table}`;
//   this.color = color;
//   //this.clean = cleanTable    
//     }
// }
// creatRoomFunc.prototype.clean = cleanTable
// let kim = new creatRoomFunc('kim', 'round table', 'red');
// let mic = new creatRoomFunc('mic', 'squar table', 'blue');

// mic.clean('soap', 'banana')
// kim.clean('soap', 'apple')


// /////////////////////////////////////////////////////////////////////////////////////////

const wolfFunc = function (param1) {
  document.querySelector('#section--3').scrollIntoView();
};
wolfFunc(`testWolf777`);
const slider = document.querySelector('.slider');
//slider.style.transform = 'scale(0.6) translateX(-800px)';
slider.style.transform = 'scale(1) ';
//slider.style.overflow = 'visible';
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const goToSlide = function (param1) {
  slides.forEach((s, i) => {
    l(`${100 * (i - currentSlide)} `);
    s.style.transform = `translateX(${100 * (i - param1)}%)`;
  });
};

btnRight.addEventListener('click', (e) => {
 
  nextSlide(1);
});
btnLeft.addEventListener('click', (e) => {
 
  nextSlide(-1);
});

goToSlide(0);

const nextSlide = function (param1) {
  currentSlide += param1;
  if (currentSlide === slides.length) currentSlide = 0;
  if (currentSlide === -1) currentSlide = slides.length - 1;
  goToSlide(currentSlide);

};
/////////////////////////////////////////////////////////////////////////////////////////