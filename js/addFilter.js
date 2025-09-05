import { effectsLevelAdd } from "./effectsLevelAdd.js";

// отдельный модуль для филтра
const uplaodPhoto = document.querySelector('.img-upload');
const photo = uplaodPhoto.querySelector('.img-upload__preview').querySelector('img');
const effects = document.querySelector('.effects');
const effectsRadio = effects.querySelector('.effects__list');


const addFilter = () => {
  effectsRadio.addEventListener('click', (evt) => {
    const target = event.target;
    if (target.classList[1] != 'visually-hidden') {
      photo.removeAttribute('class');
      const effectsName = target.classList[1];
      photo.classList.add(effectsName);
    }
    effectsLevelAdd();
  });
};

export {addFilter};
