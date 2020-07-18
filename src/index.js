import '../src/styles.css';
import '../src/sass/styles.scss';
import imgService from './js/apiService.js';
import updateImgMarkup from './js/update-img-markup';
import LoadMoreBtn from '../src/js/components/load-more-btn';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

const searchForm = document.querySelector('.js-search-form');
const ulRef = document.querySelector('.gallery');

searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchImg);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  imgService.query = form.elements.query.value;

  clearImgContainer();
  imgService.resetPage();
  fetchImg();
  form.reset();
}

function fetchImg() {
  loadMoreBtn.disable();

  imgService.fetchImg().then(hits => {
    updateImgMarkup(hits);

    loadMoreBtn.show();
    loadMoreBtn.enable();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    if (hits.length < 12) {
      loadMoreBtn.hide();
    }
  });
}

function clearImgContainer() {
  ulRef.innerHTML = '';
}
