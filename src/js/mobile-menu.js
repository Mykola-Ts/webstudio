const selectors = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
};

selectors.openMenuBtn.addEventListener('click', handlerToggleMenu);
selectors.closeMenuBtn.addEventListener('click', handlerToggleMenu);

function handlerToggleMenu() {
  document.body.classList.toggle('menu-open');
  selectors.menu.classList.toggle('is-hidden');
}
