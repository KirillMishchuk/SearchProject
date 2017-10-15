//отправка HTTP запроса
const searchVideo = (params, callback) => {

  document.querySelector('[type="text"]').value = params.title.split('%20').join(' ');

$.get(
  'https://www.googleapis.com/youtube/v3/videos', {
    part: 'snippet, contentDetails, statistics',
    id: params.videoId,
    key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
  },
  data => callback(null, data)
  )
  .fail (err => callback(err, null));
};

export default searchVideo;
