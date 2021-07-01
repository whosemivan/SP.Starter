const nav = document.querySelector(`.menu`);
const btn = document.querySelector('.header__nav-btn');

btn.classList.remove('invisible-container');
nav.classList.add('menu--hidden');


btn.addEventListener('click', () => {
  nav.classList.toggle('menu--hidden');
  btn.classList.toggle('header__nav-btn--close');
  btn.classList.toggle('header__nav-btn--opened');
});
