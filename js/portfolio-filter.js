const selectors = {
  filter: document.querySelector('.js-filter'),
  portfolioList: document.querySelector('.js-portfolio-list'),
  portfolioItems: document.querySelectorAll('.js-portfolio-list-item'),
};

selectors.filter.addEventListener('click', handlerChangeFilter);
selectors.portfolioList.addEventListener('click', handlerClickPortfolioItem);

function handlerChangeFilter(evt) {
  if (!evt.target.classList.contains('js-filter-btn')) return;

  const filterBtn = evt.target;

  filterPortfolio(filterBtn.dataset.value);

  document
    .querySelector('.active-filter-btn')
    ?.classList.remove('active-filter-btn');
  filterBtn.classList.add('active-filter-btn');
}

function filterPortfolio(value) {
  selectors.portfolioItems.forEach(item => {
    if (value === 'All') {
      item.classList.remove('visually-hidden');
    } else {
      item.dataset.id !== value
        ? item.classList.add('visually-hidden')
        : item.classList.remove('visually-hidden');
    }
  });
}

function handlerClickPortfolioItem(evt) {
  evt.preventDefault();
}
