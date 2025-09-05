import {closeBigPhoto, getCommentUsers, dataPhotoAdd} from './showBigPhoto.js';

let picturesUsers = document.querySelector('.pictures');
let pictureUser = document.querySelector('#picture').content.querySelector('.picture');
let windowPhoto = document.querySelector('.big-picture');
let buttonLoaderComments = document.querySelector('.comments-loader');

let currentOpenedPhoto;
let countPhotoUsers = 25;
let offset = 0;
let limit = 5;


let commentsLoader = () => {
  buttonLoaderComments.addEventListener('click', () => {
    limit += 5;
    offset += 5;
    getCommentUsers(currentOpenedPhoto, offset, limit);
    if (currentOpenedPhoto.comments.length <= limit) {
      buttonLoaderComments.classList.add('hidden');
    }
  });
};

//вид фильтра
let buttonFiltterDefault = document.querySelector('#filter-default');
let buttonFiltterRandom = document.querySelector('#filter-random');
let buttonFiltterDiscussed = document.querySelector('#filter-discussed');

let compareFunction = (a, b) => {
  if (buttonFiltterDefault.classList.contains('img-filters__button--active')) {
    countPhotoUsers = 25;
    return a.id - b.id;
  } else if (buttonFiltterRandom.classList.contains('img-filters__button--active')) {
    countPhotoUsers = 10;
    return 0.5 - Math.random();
  } else if (buttonFiltterDiscussed.classList.contains('img-filters__button--active')) {
    countPhotoUsers = 25;
    return b.likes - a.likes;
  } else {return 0;}
};

// функиця отрисовки фото
let createPhotoHTMLNodes = (arr) => {
  let pictureUsersContainer = document.createDocumentFragment();
  let pictures = arr.sort(compareFunction).slice(0, countPhotoUsers);
  pictures.forEach((picture) => {
    let newPicture = pictureUser.cloneNode(true);
    newPicture.dataset.photoId = picture.id;
    newPicture.querySelector('.picture__img').src = picture.url;
    newPicture.querySelector('.picture__img').alt = picture.description;
    newPicture.querySelector('.picture__likes').textContent = picture.likes;
    newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureUsersContainer.appendChild(newPicture);

    newPicture.addEventListener('click', (evt) => {
      offset = 0;
      limit = 5;
      windowPhoto.dataset.bigPhotoId=picture.id;
      let currentOpenedPhotoId = +windowPhoto.getAttribute('data-big-photo-id');
      currentOpenedPhoto = pictures.find((item) => item.id === currentOpenedPhotoId);
      evt.preventDefault();
      dataPhotoAdd(currentOpenedPhoto, limit);
      getCommentUsers(currentOpenedPhoto, offset, limit);
      closeBigPhoto();
      commentsLoader();
    });
  });
  picturesUsers.appendChild(pictureUsersContainer);
};


export {createPhotoHTMLNodes};


