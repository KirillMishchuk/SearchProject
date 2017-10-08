import searchVideo from './searchVideo';
import getOutputDetails from './renderDetails';

const backBtn = document.querySelector('input[type="button"]');
backBtn.addEventListener('click', () => window.history.back());

const params = window.location.href.split('?')[1].split('&').reduce((acc, item) => {
  const [key, value] = item.split('=');
  acc[key] = value;
  return acc;
}, {});

searchVideo(params, getOutputDetails);
