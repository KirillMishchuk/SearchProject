$(function() {

  const getVideoId = str => {
    const arr = str.split('?');
    return arr[1];
  }
  const videoId = getVideoId(window.location.href);


  //отправка HTTP запроса
  const searchVideo = () => {
    //обнулить контент перед очередным запросом
    $('.results').html('');

  $.get(
    "https://www.googleapis.com/youtube/v3/videos", {
      part: 'snippet, contentDetails, statistics',
      id: videoId,
      key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
    },
    data => {
      const item = data.items[0];
      //console.log(item);
      const outputDetails = getOutputDetails(item);
      $('.results').append(outputDetails);
    });
    }


//функция конструирования ответа
const getOutputDetails = item => {
  const {contentDetails: {definition}} = item;
  const {snippet: {title, description, channelTitle, publishedAt, localized: {title: localized}}} = item;
  const {statistics: {commentCount, dislikeCount, likeCount, viewCount}} = item;

  const output =`<li><div class="iframe"><iframe src="http://www.youtube.com/embed/${videoId}"></iframe><div></li><li>
  <div class="center"><h2>${title}</h2><small>By <span class="channelTitle">${channelTitle}</span> on ${publishedAt}</small>
  <p>${description}</p><p>${localized}</p><ul class="list"><li>${commentCount} комментариев</li><li>${likeCount} понравилось</li>
  <li>${dislikeCount} не понравилось</li><li>${viewCount} просмотров</li></ul></div></li>`;
  return output;
}
searchVideo();
})
