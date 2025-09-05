
const uplaodPhoto = document.querySelector('.img-upload');
const scale = uplaodPhoto.querySelector('.scale');
const scaleButtonUp = scale.querySelector('.scale__control--bigger');
const scaleButtonDown = scale.querySelector('.scale__control--smaller');
const photo = uplaodPhoto.querySelector('.img-upload__preview').querySelector('img');
const scaleValue = scale.querySelector('.scale__control--value');

let value;


let scalePhotoUp = () => {
  if (value < 100) {
    value += 25;
    photo.style.transform = `scale(${  value/100  })`;
    scaleValue.value = value;
  }
};

let scalePhotoDown = () => {
  if (value > 25) {
    value -= 25;
    photo.style.transform = `scale(${  value/100  })`;
    scaleValue.value = value;
  }
};

let scalePhoto = () => {
  value = 100;
  scaleValue.value = value;
  photo.style.transform = `scale(${  value/100  })`;
  scaleButtonUp.addEventListener('click', scalePhotoUp);
  scaleButtonDown.addEventListener('click', scalePhotoDown);
};


export {scalePhotoUp, scalePhotoDown, scalePhoto};
