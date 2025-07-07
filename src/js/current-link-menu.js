const menuLinks = document.querySelectorAll('.js-menu-link');
const currentPage = document.body.dataset.page;

menuLinks.forEach(link => {
  if (currentPage === link.dataset.page) {
    link.classList.add('menu-link-current');
  }
});
