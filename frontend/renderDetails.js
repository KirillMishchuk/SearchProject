
//функция конструирования ответа
const getOutputDetails = item => {
  const {id: videoId} = item;
  const {contentDetails: {definition}} = item;
  const {snippet: {title, description, channelTitle, publishedAt, localized: {title: localized}}} = item;
  const {statistics: {commentCount, dislikeCount, likeCount, viewCount}} = item;

// отображение
  const outputDetails =`<li><div class="iframe"><iframe src="http://www.youtube.com/embed/${videoId}"></iframe><div></li><li>
  <div class="center"><h2>${title}</h2><small>By <span class="channelTitle">${channelTitle}</span> on ${publishedAt}</small>
  <p>${description}</p><p>${localized}</p><ul class="list"><li>${commentCount} комментариев</li><li>${likeCount} понравилось</li>
  <li>${dislikeCount} не понравилось</li><li>${viewCount} просмотров</li></ul></div></li>`;
  return outputDetails;
};

export default getOutputDetails;
