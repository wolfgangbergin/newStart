'use strict';

// /////////////////////////////////////////////////////////////////////////////////////////
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height


const header = document.querySelector('header');

const obsCallBack = (entries) => {
  entries[0].isIntersecting
    ? nav.classList.remove('sticky')
    : nav.classList.add('sticky');
};

const obvOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(obsCallBack, obvOption);

headerObserver.observe(header);

// /////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';

export { lectures };
