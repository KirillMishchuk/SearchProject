$(function() {

  const href = window.location.href;
  //console.log(href);
  function getVideoId(str) {
    const arr = str.split('?');
    return arr[1];
  }

  const videoId = getVideoId(href);
  //console.log(videoId);
  searchVideo();

  //отправка HTTP запроса
  function searchVideo() {
    //обнулить контент перед очередным запросом
    $('.results').html('');

  $.get(
    "https://www.googleapis.com/youtube/v3/videos", {
      part: 'snippet, contentDetails, statistics',
      id: videoId,
      key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
    },
    function(data) {
      const item = data.items[0];
      //console.log(item);
      const outputDetails = getOutputDetails(item);
      $('.results').append(outputDetails);
    });
    }





//функция конструирования ответа
function getOutputDetails(item) {
  const definition = item.contentDetails.definition;
  const title = item.snippet.title;
  const description = item.snippet.description;
  const channelTitle = item.snippet.channelTitle;
  const videoDate = item.snippet.publishedAt;

  const localized = item.snippet.localized.title;
  const commentCount = item.statistics.commentCount;
  const dislikeCount = item.statistics.dislikeCount;
  const likeCount = item.statistics.likeCount;
  const viewCount = item.statistics.viewCount;

  const output ='<li>' + '<div class="iframe">' + '<iframe src="http://www.youtube.com/embed/' + videoId + '"' +
  'width="100%" height="500px">' + '</iframe>' + '<div>' + '</li>' +
  '<li>' + '<div class="center">' + '<h2>' + title + '</h2>' + '<small>' + 'By <span class="channelTitle">' +
  channelTitle + '</span> on ' + videoDate + '</small>' + '<p>' + description + '</p>' + '<p>' + localized + '</p>' +
  '<ul class="list">' + '<li>' + commentCount + ' комментариев' + '</li>' + '<li>' + likeCount + ' понравилось' + '</li>' +
  '<li>' + dislikeCount + ' не понравилось' + '</li>' + '<li>' + viewCount + ' просмотров' + '</li>' + '</ul>' + '</div>' +
  '</li>' + '';
  return output;
}

})
