import FormHandler from './formhandler';
import Render from './render';
import Search from './search';
import UserStore from './storage';

const FORM_SELECTOR = 'form';
const SEARCH_FIELD = '[type="search"]';
const SEARCH_BUTTON = '[type="submit"]';
const BACK_BUTTON = '[type="button"]';
const CHECKLIST_SELECTOR = 'main';
const SERVER_URL = 'https://www.googleapis.com/youtube/v3/';
const SERVER_KEY = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';

const search = new Search(SERVER_URL, SERVER_KEY);
const render = new Render(CHECKLIST_SELECTOR);

const userStore = new UserStore('page');
let page = userStore.get();
if (page) {
  render.addRow(JSON.parse(page));
}

const formHandler = new FormHandler(FORM_SELECTOR, SEARCH_FIELD, SEARCH_BUTTON, BACK_BUTTON);
formHandler.addFocusHandler();
formHandler.addBlurHandler();
formHandler.addSubmitHandler(query => {
  return search.getAll(query)
    .then(data => {
      userStore.set(JSON.stringify(data));
      render.addRow(data);
    })
});

formHandler.addBackHandler(() => {
  render.addRow(JSON.parse(userStore.get()));
});

render.addClickHandler((id, title) => {
  formHandler.addInputValue(title);
  formHandler.addBackBtnVisibility();
  return search.get(id)
    .then(data => {
      render.addRowDetails(data);
    })
});
