//отправка HTTP запроса
const search = callback => {

  //значение инпута
  const query = document.querySelector('[type="search"]').value;

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
