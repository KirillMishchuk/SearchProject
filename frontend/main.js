import search from './search';

  const searchField = document.querySelector('.search-field');
  const searchButton = document.querySelector('.search-btn');
  const searchForm = document.querySelector('.search-form');

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

  //отмена стандартного submit
  searchForm.addEventListener('submit', e => e.preventDefault());
   searchButton.addEventListener('click', search);
