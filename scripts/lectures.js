'use strict';
import { script2 } from './script2.js';
// /////////////////////////////////////////////////////////////////////////////////////////
{
  /* <img
src="img/digital-lazy.jpg"
data-src="img/digital.jpg"
alt="Computer"
class="features__img lazy-img"
/> */
}
let imgTarget = document.querySelectorAll('img[data-src]');

let loadImg = (entries, observer) => {
 
  if (!entries[0].isIntersecting) return;
  entries[0].target.src = entries[0].target.dataset.src;
//   entries[0].target.setAttribute(
//     'src',
//     entries[0].target.getAttribute('data-src')
//   );
  // entries[0].target.classList.remove('lazy-img');
//   observer.unobserve(entries[0].target);
let wolfMan = entries[0].target.addEventListener('load', ()=>{
    observer.unobserve(entries[0].target)
     entries[0].target.classList.remove('lazy-img')
     entries[0].target.removeEventListener('load', wolfMan)
    }
     )
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '400px'
});

imgTarget.forEach((img) => {
  imgObserver.observe(img);
});

/////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';

export { lectures, loadImg };
