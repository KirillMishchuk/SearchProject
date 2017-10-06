
//функция конструирования ответа
const getOutput = item => {
  const {id: {videoId}} = item;
  const {snippet: {title, channelTitle, description, publishedAt, thumbnails: {high: {url: thumb}}}} = item;
// отображение
  const output =`<li><div class="list-left"><img src="${thumb}"></div><div class="list-right"><h3>
  <a href="video.html?videoId=${videoId}">${title}</a></h3><small>By <span class="channelTitle">${channelTitle}
  </span> on ${publishedAt}</small><p>${description}</p></div></li><div class="clearfix"></div>`;
  return output;
};

export default getOutput;
