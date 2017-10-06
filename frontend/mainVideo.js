import searchVideo from './searchVideo';

const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => history.back());

const params = window.location.href.split('?')[1].split('&').reduce((acc, item) => {
      const [key, value] = item.split('=');
      acc[key] = value;
      return acc;
    }, {});

searchVideo(params);
