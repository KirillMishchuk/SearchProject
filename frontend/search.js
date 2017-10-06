import getOutput from './renderList';

//отправка HTTP запроса
const search = () => {
  //обнулить контент перед очередным запросом
  $('.results').html('');
  //значение инпута
 const query = $('.search-field').val();

  $.get(
    'https://www.googleapis.com/youtube/v3/search', {
      maxResults: '10',
      part: 'snippet, id',
      q: query,
      type: 'video',
      key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
    },
    data => {
      sessionStorage.setItem('page', JSON.stringify(data.items));

      $.each(data.items, (i, item) => {
        const output = getOutput(item);
        $('.results').append(output);
      })
    }
  )
  .fail ((xhr) => {
      $('.results').html(`ошибка ответа от сервера - ${xhr.status}`);
  });
};

export default search;
