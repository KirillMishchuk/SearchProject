import getOutputDetails from './renderDetails';
//отправка HTTP запроса
const searchVideo = (params) => {
  //обнулить контент перед очередным запросом
  $('.results').html('');

$.get(
  'https://www.googleapis.com/youtube/v3/videos', {
    part: 'snippet, contentDetails, statistics',
    id: params.videoId,
    key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
  },
  data => {
    const item = data.items[0];
    const outputDetails = getOutputDetails(item);
    $('.results').append(outputDetails);
  })
  .fail ((xhr) => {
      $('.results').html(`ошибка ответа от сервера - ${xhr.status}. Начните поиск с главной страницы`);
  });
};

export default searchVideo;
