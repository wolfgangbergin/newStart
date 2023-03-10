'use strict';

// /////////////////////////////////////////////////////////////////////////////////////////

const oTC = document.querySelector('.operations__tab-container');
const operationsContent = document.querySelectorAll('.operations__content')

oTC.addEventListener('click', function (e) {
  const button = e.target.closest('button');
  if (!button) return;
  [...oTC.children].forEach((ele) =>
    ele.classList.remove('operations__tab--active')
  );
  Array.from(operationsContent).forEach((ele)=>{
    ele.classList.remove(`operations__content--active`)
  })
 Array.from(operationsContent)
  button.classList.add('operations__tab--active');
  const temp1 = document.querySelector(
    `.operations__content--${button.dataset.tab}`
  );

  temp1.classList.add(`operations__content--active`)
 
});

// /////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';

export { lectures };
