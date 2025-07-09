const selectors = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

selectors.openModalBtn.addEventListener('click', handlerOpenModal);
selectors.closeModalBtn.addEventListener('click', handlerCloseModal);

function handlerOpenModal() {
  document.body.classList.add('modal-open');
  selectors.modal.classList.remove('is-hidden');

  selectors.modal.addEventListener('click', handlerCloseModalByClickBackdrop);
  window.addEventListener('keydown', handlerCloseModalByEscape);
}

function handlerCloseModal() {
  document.body.classList.remove('modal-open');
  selectors.modal.classList.add('is-hidden');

  selectors.modal.removeEventListener(
    'click',
    handlerCloseModalByClickBackdrop
  );
  window.removeEventListener('keydown', handlerCloseModalByEscape);
}

function handlerCloseModalByClickBackdrop(evt) {
  if (evt.target === evt.currentTarget) {
    handlerCloseModal();
  }
}

function handlerCloseModalByEscape(evt) {
  if (evt.code === 'Escape') {
    handlerCloseModal();
  }
}
