import search from './search';
import renderList from './renderList';

const main = (() => {
  const searchField = document.querySelector('[type="search"]');
  const searchButton = document.querySelector('[type="submit"]');
  const form = document.querySelector('form');
  const page = sessionStorage.getItem('page');

  if (page) {
    renderList(null, JSON.parse(page));
  }

  //отмена стандартного submit
  form.addEventListener('submit', e => e.preventDefault());
  searchButton.addEventListener('click', search.bind(null, renderList));

  //обработчик фокуса на поле
  $(searchField).on('focus', function() {
    $(this).animate({
      width: '100%'
    }, 400);
    $(searchButton).animate({
      right: '10px'
    }, 400);
  });

  //обработчик потери фокуса на поле
  $(searchField).on('blur', function() {
    if ($(this).val() === '') {
      $(this).animate({
        width: '60%'
      }, 400);
      $(searchButton).animate({
        right: '260px'
      }, 400);
    }
  });
})();

export default main;
