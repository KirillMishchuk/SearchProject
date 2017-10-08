import search from './search';
import fillResults from './renderList';

const searchField = document.querySelector('input[type="search"]');
const searchButton = document.querySelector('input[type="submit"]');
const form = document.querySelector('form');
const page = sessionStorage.getItem('page');

if (page) {
  fillResults(null, JSON.parse(page));
}

//отмена стандартного submit
form.addEventListener('submit', e => e.preventDefault());
searchButton.addEventListener('click', search.bind(null, fillResults));

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
