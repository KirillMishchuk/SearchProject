
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
    if(searchField.val() === '') {
      $(searchField).animate({
        width: '60%'
      }, 400);
      $(searchButton).animate({
        right: '260px'
      }, 400);
    }
  });

  //отмена стандартного submit
  $('.search-form').on('submit', function(e) {
     e.preventDefault()
   });
})
/*------------------------------------------------------------------*/


  //отправка HTTP запроса
  function search() {
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
      function(data) {
        //console.log(data);
        $.each(data.items, function(i, item) {
          const output = getOutput(item);

          $('.results').append(output);
        })
      }
    );
  }

  //функция конструирования ответа
  function getOutput(item) {
    const videoId = item.id.videoId;
    const title = item.snippet.title;
    const description = item.snippet.description;
    const thumb = item.snippet.thumbnails.high.url;
    const channelTitle = item.snippet.channelTitle;
    const videoDate = item.snippet.publishedAt;

    const output = '<li>' + '<div class="list-left">' + '<img src=' + thumb + '>' + '</div>' + '<div class="list-right">' +
    '<h3>' + '<a href="video.html?' + videoId + '"' + '>' + title + '</a>' + '</h3>' + '<small>By <span class="channelTitle">' +
     channelTitle + '</span> on ' + videoDate + '</small>' + '<p>' + description + '</p>' + '</div>' + '</li>' +
    '<div class="clearfix"></div>' + '';
    return output;
  }



  //обработчик заголовка на контейнере ul, дилегирование
  // $('.results').on('click', function(e) {
  //
  //   const id = $(event.target).closest("li").attr("data-id");
  //   //console.log(id);
  //   $.get(
  //     "https://www.googleapis.com/youtube/v3/videos", {
  //       part: 'snippet, contentDetails, statistics',
  //       id: id,
  //       key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
  //     },
  //     function(data) {
  //       console.log(data);
  //
  //
  //       // const nextPageToken = data.nextPageToken;
  //       // const prevPageToken = data.prevPageToken;
  //       // $.each(data.items, function(i, item) {
  //       //   const output = getOutput(item);
  //       //
  //       //   $('#results').append(output);
  //       // })
  //     }
  //   );
  // })
