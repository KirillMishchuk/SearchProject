
$(function() {
  const searchField = $(".search-field");
  const searchButton = (".search-btn");

  //обработчик фокуса на поле
  $(searchField).on('focus', function() {
    $(this).animate({
      width: '100%'
    }, 400);
    $(searchButton).animate({
      right: '10px'
    }, 400);
  });

  //обработчик потери фокуса на поле
  $(searchField).on('blur', function() {
    if ($(this).val() === '') {
      $(this).animate({
        width: '60%'
      }, 400);
      $(searchButton).animate({
        right: '260px'
      }, 400);
    }
  });

  //отмена стандартного submit
  $('.search-form').on('submit', (e) =>
     e.preventDefault()
   );
})
/*------------------------------------------------------------------*/


  //отправка HTTP запроса
  const search = () => {
    //обнулить контент перед очередным запросом
    $('.results').html('');
    //значение инпута
    const query = $('.search-field').val();

    $.get(
      "https://www.googleapis.com/youtube/v3/search", {
        maxResults: '10',
        part: 'snippet, id',
        q: query,
        type: 'video',
        key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
      },
      (data) => {
        //console.log(data);
        $.each(data.items, (i, item) => {
          const output = getOutput(item);
          $('.results').append(output);
        })
      }
    );
  }

  //функция конструирования ответа
  const getOutput = (item) => {
    const {id: {videoId}} = item;
    const {snippet: {title, channelTitle, description, publishedAt, thumbnails: {high: {url: thumb}}}} = item;

    const output =`<li><div class="list-left"><img src="${thumb}"></div><div class="list-right"><h3>
    <a href="video.html?${videoId}">${title}</a></h3><small>By <span class="channelTitle">${channelTitle}
    </span> on ${publishedAt}</small><p>${description}</p></div></li><div class="clearfix"></div>`;
    return output;
  }



  //обработчик заголовка на контейнере ul, дилегирование
  // $('.results').on('click', function(e) {
  //   const id = $(event.target).closest("li").attr("data-id");
