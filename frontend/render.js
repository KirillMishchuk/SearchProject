class Render {
  constructor(selector) {
    this.$element = $(selector);
  }

  addClickHandler(callback) {
    this.$element.on('click', 'h3', event => {
      event.preventDefault();
      const id = $(event.target).closest("li").attr("data-id");
      const title = $(event.target).closest("li").attr("data-title");
      callback(id, title);
    })
  }

  addRow(data) {
    const renderList = new RenderList(data);
    this.$element.html('').append(renderList.$element);
  }

  addRowDetails(data) {
    const renderDetails = new RenderDetails(data);
    this.$element.html('').append(renderDetails.$element);
  }
}


class RenderList {
  constructor(data) {
    this.data = data;
    //перебор результата запроса
    const output = this.data.items.reduce((acc, item) => {
      const {
        id: {
          videoId
        },
        snippet: {
          title,
          channelTitle,
          description,
          publishedAt,
          thumbnails: {
            high: {
              url: thumb
            }
          }
        }
      } = item;
      //формирование элемента
      acc += `<li class="clearfix" data-id="${videoId}" data-title="${title}">
              <div class="list-left">
                <img src="${thumb}">
              </div>
              <div class="list-right">
                <h3>
                  <a href="video.html?videoId=${videoId}&title=${title}">${title}</a>
                </h3>
                <small>By
                  <span class="red">${channelTitle}</span>on ${publishedAt}
                </small>
                <p>${description}</p>
              </div>
            </li>`;
      return acc;
    }, '');
    this.$element = `<ul class="results">${output}</ul>`;
  }
}


class RenderDetails {
  constructor(data) {
    this.data = data;
    //перебор результата запроса
    const {
      id: videoId,
      snippet: {
        title,
        description,
        channelTitle,
        publishedAt,
        localized: {
          title: localized
        }
      },
      statistics: {
        commentCount,
        dislikeCount,
        likeCount,
        viewCount
      }
    } = data.items[0];
    //формирование элемента
    const outputDetails = `<li>
                          <div>
                            <iframe src="http://www.youtube.com/embed/${videoId}"></iframe>
                          <div>
                        </li>
                        <li>
                          <div>
                            <h2>${title}</h2>
                            <small>By
                              <span class="red">${channelTitle}</span> on ${publishedAt}
                            </small>
                            <p>${description}</p>
                            <p>${localized}</p>
                            <ul class="list">
                              <li>${commentCount} комментариев</li>
                              <li>${likeCount} понравилось</li>
                              <li>${dislikeCount} не понравилось</li>
                              <li>${viewCount} просмотров</li>
                            </ul>
                          </div>
                        </li>`;
    this.$element = `<ul class="results">${outputDetails}</ul>`;
  }
}

export default Render;
