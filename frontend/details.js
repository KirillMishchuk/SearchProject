import searchVideo from './searchVideo';
import renderDetails from './renderDetails';

const mainVideo = (() => {
  const backBtn = document.querySelector('[type="button"]');
  backBtn.addEventListener('click', () => window.history.back());

  const params = window.location.href.split('?')[1].split('&').reduce((acc, item) => {
    const [key, value] = item.split('=');
    acc[key] = value;
    return acc;
  }, {});

  searchVideo(params, renderDetails);
})();

export default mainVideo;
