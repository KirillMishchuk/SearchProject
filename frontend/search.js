//отправка HTTP запроса
const search = (callback) => {
  //обнулить контент перед очередным запросом
  $('.results').html('');

  //значение инпута
  const query = $('input[type="search"]').val();

  $.get(
    'https://www.googleapis.com/youtube/v3/search', {
      maxResults: '10',
      part: 'snippet, id',
      q: query,
      type: 'video',
      key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
    },
    data => callback(null, data)
  )
  .fail (err => callback(err, null));
};

export default search;
