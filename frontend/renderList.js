//функция конструирования ответа
const renderList = (err, data) => {
  if (err) {
    alert('сервер не отвечает');
    return false;
  }

  sessionStorage.setItem('page', JSON.stringify(data));

  const output = data.items.reduce((acc, item) => {
    const {id: {videoId}, snippet: {title, channelTitle, description, publishedAt, thumbnails: {high: {url: thumb}}}} = item;

    // отображение
    acc += `<li class="clearfix"><div class="list-left"><img src="${thumb}"></div><div class="list-right"><h3>
        <a href="video.html?videoId=${videoId}&title=${title}">${title}</a></h3><small>By <span class="red">${channelTitle}
        </span> on ${publishedAt}</small><p>${description}</p></div></li>`;
    return acc;
  }, '');

  $('main').html('').append(`<ul class="results">${output}</ul>`);
};

export default renderList;
