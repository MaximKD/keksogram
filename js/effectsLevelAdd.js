// отельный модуль для слайдера
//let levelEffectContainer = document.querySelector('.effect-level');
const uplaodPhoto = document.querySelector('.img-upload');
const photo = uplaodPhoto.querySelector('.img-upload__preview').querySelector('img');
const levelEffectContainer = document.querySelector('.effect-level');
const levelEffect = levelEffectContainer.querySelector('.effect-level__slider');
const levelEffectValueElement = document.querySelector('.effect-level__value');

// удаление старого слайдера

function destroyExistingSlider() {
  if (levelEffect.noUiSlider) {
    levelEffect.noUiSlider.destroy();
  }
}

const effectsLevelAdd = () => {
  if (photo.classList.contains('effects__preview--chrome')) {
    destroyExistingSlider();
    noUiSlider.create(levelEffect, {
      start: [1],
      step: 0.1,
      range: {
        'min': 0,
        'max': 1
      }
    });

    levelEffect.noUiSlider.on('update', (values, handle) => {
      levelEffectValueElement.innerHTML = values[handle];
      levelEffectValueElement.value = values[handle];
      photo.style.filter = `grayscale(${values[handle]})`;
    });

  } else if (photo.classList.contains('effects__preview--sepia')) {
    destroyExistingSlider();
    noUiSlider.create(levelEffect, {
      start: [1],
      step: 0.1,
      range: {
        'min': 0,
        'max': 1
      }
    });

    levelEffect.noUiSlider.on('update', (values, handle) => {
      levelEffectValueElement.innerHTML = values[handle];
      levelEffectValueElement.value = values[handle];
      photo.style.filter = `sepia(${values[handle]})`;
    });

  } else if (photo.classList.contains('effects__preview--marvin')) {

    destroyExistingSlider();
    noUiSlider.create(levelEffect, {
      start: [100],
      step: 1,
      range: {
        'min': 0,
        'max': 100
      }
    });

    levelEffect.noUiSlider.on('update', (values, handle) => {
      levelEffectValueElement.innerHTML = values[handle];
      levelEffectValueElement.value = values[handle];
      photo.style.filter = `invert(${values[handle]}%)`;
    });

  } else if (photo.classList.contains('effects__preview--phobos')) {

    destroyExistingSlider();
    noUiSlider.create(levelEffect, {
      start: [3],
      step: 0.1,
      range: {
        'min': 0,
        'max': 3
      }
    });

    levelEffect.noUiSlider.on('update', (values, handle) => {
      levelEffectValueElement.innerHTML = values[handle];
      levelEffectValueElement.value = values[handle];
      photo.style.filter = `blur(${values[handle]}px)`;
    });

  } else if (photo.classList.contains('effects__preview--heat')) {

    destroyExistingSlider();
    noUiSlider.create(levelEffect, {
      start: [3],
      step: 0.1,
      range: {
        'min': 1,
        'max': 3
      }
    });

    levelEffect.noUiSlider.on('update', (values, handle) => {
      levelEffectValueElement.innerHTML = values[handle];
      levelEffectValueElement.value = values[handle];
      photo.style.filter = `brightness(${values[handle]})`;
    });

  } else {
    destroyExistingSlider();
    photo.style.filter = '';
  }
};

export {effectsLevelAdd, destroyExistingSlider};
