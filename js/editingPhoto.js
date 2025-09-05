import {scalePhoto} from './scalePhoto.js';
import { addFilter } from './addFilter.js';
import { destroyExistingSlider } from './effectsLevelAdd.js';

// eslint-disable-next-line no-unused-vars
const uplaodPhoto = document.querySelector('.img-upload');
const editingPhotoWindow = uplaodPhoto.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonClose = uplaodPhoto.querySelector('.img-upload__cancel');
const inputPhoto = uplaodPhoto.querySelector('.img-upload__input');
const photo = uplaodPhoto.querySelector('.img-upload__preview').querySelector('img');
const hashtags = uplaodPhoto.querySelector('.text__hashtags');
const description = uplaodPhoto.querySelector('.text__description');

function closePhotoClick() {
  editingPhotoWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  photo.removeAttribute('class');
  photo.style.filter = '';
  destroyExistingSlider();
  photo.src = '';
};

const closePhotoKeydown = (evt) => {
  //repealClosePhoto();
  //const hashtagNotFocus = hashtags!==document.activeElement;
  // const descriptionNotFocus = description!==document.activeElement;
  if (evt.keyCode === 27/* && hashtagNotFocus && descriptionNotFocus*/) {
    editingPhotoWindow.classList.add('hidden');
    body.classList.remove('modal-open');
    photo.removeAttribute('class');
    photo.style.filter = '';
    destroyExistingSlider();
    photo.src = '';
  }
};

const keydownEscInFocus = (evt) => {
  if (evt.keyCode === 27) {
    event.stopPropagation();
  }
};

const closeBigPhoto = () => {
  buttonClose.addEventListener('click', closePhotoClick);
  document.addEventListener('keydown', closePhotoKeydown);
  hashtags.removeEventListener('keydown', keydownEscInFocus);
  description.removeEventListener('keydown', keydownEscInFocus);
};

// основная функиця
const editingPhoto = () => {
  inputPhoto.addEventListener('change', function () {
    editingPhotoWindow.classList.remove('hidden');
    body.classList.add('modal-open');
    photo.classList.add('.effects__preview--none');
    const file = this.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
      photo.src = reader.result;
    };
    reader.readAsDataURL(file);
    scalePhoto();
    addFilter();
    hashtags.addEventListener('keydown', keydownEscInFocus);
    description.addEventListener('keydown', keydownEscInFocus);
  });
  closeBigPhoto();
};


editingPhoto();


