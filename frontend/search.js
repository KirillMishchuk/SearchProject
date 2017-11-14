class Search {
  constructor(url, key) {
    this.serverUrl = url;
    this.serverKey = key;
  }

  getAll(query, callback) {
    return $.get(`${this.serverUrl}search`, {
          maxResults: '10',
          part: 'snippet, id',
          q: query,
          type: 'video',
          key: this.serverKey
        },
        data => {
          if (callback) {
            callback(data);
          }
        }
      )
      .fail(err => alert(`Ошибка запроса ${err.status}`));
  };


  get(videoId, callback) {
    return $.get(`${this.serverUrl}videos`, {
          part: 'snippet, contentDetails, statistics',
          id: videoId,
          key: this.serverKey
        },
        data => {
          if (callback) {
            callback(data);
          }
        }
      )
      .fail(err => alert(`Ошибка запроса ${err.status}`));
  }
}

export default Search;
