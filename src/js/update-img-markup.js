import imgTpl from '../templates/image_card.hbs';

const ulRef = document.querySelector('.gallery');

export default function updateImgMarkup(hits) {
  const markup = imgTpl(hits);
  ulRef.insertAdjacentHTML('beforeend', markup);
}
