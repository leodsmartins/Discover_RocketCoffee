
const selectButtonOpen = document.querySelector('.header__photo-2');
selectButtonOpen.addEventListener('click', openMenu);

const selectButtonClose = document.querySelector('.header__photo-3');
selectButtonClose.addEventListener('click', openMenu);


const showMenuMobile = document.querySelector('.main__menu');
const selectMainContainer = document.querySelector('.main__container');
const selectHome = document.querySelector('.main__menu-home');
const selectMenu = document.querySelector('.main__menu-menu');
const selectRecompensas = document.querySelector('.main__menu-recompensas');
const selectGift = document.querySelector('.main__menu-gift');
const selectLojas = document.querySelector('.main__menu-lojas');


function openMenu() {
  selectButtonOpen.classList.toggle('menu-disabled');
  selectButtonClose.classList.toggle('menu-disabled');
  showMenuMobile.classList.toggle('menu-disabled');
  selectMainContainer.classList.toggle('menu-disabled');
  selectHome.classList.toggle('menu-disabled');
  selectMenu.classList.toggle('menu-disabled');
  selectRecompensas.classList.toggle('menu-disabled');
  selectGift.classList.toggle('menu-disabled');
  selectLojas.classList.toggle('menu-disabled');
}

