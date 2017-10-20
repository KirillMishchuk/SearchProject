//функция конструирования ответа
const renderDetails = (err, data) => {
  if (err) {
    alert('Сервер не отвечает');
    return false;
  }

  const {id: videoId, snippet: {title, description, channelTitle, publishedAt, localized: {title: localized}},
  statistics: {commentCount, dislikeCount, likeCount, viewCount}} = data.items[0];

  // отображение
  const outputDetails =`<li><div><iframe src="http://www.youtube.com/embed/${videoId}"></iframe><div></li><li>
  <div><h2>${title}</h2><small>By <span class="red">${channelTitle}</span> on ${publishedAt}</small>
  <p>${description}</p><p>${localized}</p><ul class="list"><li>${commentCount} комментариев</li><li
  >${likeCount} понравилось</li><li>${dislikeCount} не понравилось</li><li>${viewCount} просмотров</li></ul></div></li>`;

  $('main').html('').append(`<ul class="results">${outputDetails}</ul>`);
};

export default renderDetails;
