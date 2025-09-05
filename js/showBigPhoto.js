let windowPhoto = document.querySelector('.big-picture');
let bigPhoto = windowPhoto.querySelector('.big-picture__img img');
let social = document.querySelector('.social');
let likes = social.querySelector('.likes-count');
let commentsCount = social.querySelector('.social__comment-count');
let commentsNumber = commentsCount.querySelector('.comments-count');
let buttonLoaderComments = social.querySelector('.comments-loader');
let body = document.querySelector('body');
let buttonClosePictute = windowPhoto.querySelector('.big-picture__cancel');
let photoAlt = windowPhoto.querySelector('.social__caption');
let socialCommentsList = document.querySelector('.social__comments');

let comments = new Array();
let commentsOpen = 0;

let deleteSocialComments = () => {
  let socialComments = socialCommentsList.querySelectorAll('.social__comment');
  for (let socialComment of socialComments) {
    socialComment.remove();
  }  // удаляю изначальные коментарии
};

let closePhotoClick = () => {
  windowPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  deleteSocialComments();
  commentsOpen = 0;
  // buttonLoaderComments.removeEventListener('click', commentsAdd);
};

let closePhotoKeydown = (evt) => {
  if (evt.keyCode === 27) {
    windowPhoto.classList.add('hidden');
    body.classList.remove('modal-open');
    deleteSocialComments();
    commentsOpen = 0;
    // buttonLoaderComments.removeEventListener('click', commentsAdd);
  }
};

//не могу разобраться как правильно убрать обработчик события
let closeBigPhoto = () => {
  buttonClosePictute.addEventListener('click', closePhotoClick);
  document.addEventListener('keydown', closePhotoKeydown);
}; // закрытие большой фотографии

let getCommentUsers = (dataPhoto, offset, limit) => {
  comments = dataPhoto.comments.slice(offset, limit);
  comments.forEach((comment) => {
    let socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');
    let commentAvatar = document.createElement('img');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    socialComment.appendChild(commentAvatar);
    let commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;
    socialComment.appendChild(commentText);
    socialCommentsList.appendChild(socialComment);
  });
  commentsOpen = commentsOpen + comments.length;
  commentsCount.textContent = `${commentsOpen} из ${commentsNumber.textContent = dataPhoto.comments.length} кoмментариев`; // временно
}; //добавление коментариев




let dataPhotoAdd = (dataPhoto, limit) => {
  if (dataPhoto.comments.length <= limit) {
    buttonLoaderComments.classList.add('hidden');
  } else {
    buttonLoaderComments.classList.remove('hidden');
  }
  deleteSocialComments();
  body.classList.add('modal-open');
  windowPhoto.classList.remove('hidden');
  bigPhoto.src = dataPhoto.url;
  likes.textContent = dataPhoto.likes;
  photoAlt.textContent = dataPhoto.description;
};





export {closeBigPhoto, getCommentUsers, dataPhotoAdd};

