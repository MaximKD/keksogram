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

let deleteSocialComments = () => {
  let socialComments = socialCommentsList.querySelectorAll('.social__comment');
  for (let socialComment of socialComments) {
    socialComment.remove();
  };  // удаляю изначальные коментарии
};


let closeBigPhoto = () => {
  buttonClosePictute.addEventListener('click', function () {
    windowPhoto.classList.add('hidden');
    body.classList.remove('modal-open');
    let socialComments = socialCommentsList.querySelectorAll('.social__comment');
  });
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      windowPhoto.classList.add('hidden');
      body.classList.remove('modal-open');
  }});
} // закрытие большой фотографии
  let getCommentUsers = () => {
    dataPhoto.comments.forEach((comment) => {
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
  })
} //добавление коментариев

let showBigPhoto = (photo, dataPhoto) => {
    photo.addEventListener('click', (evt) => {
    evt.preventDefault();
    deleteSocialComments();
    windowPhoto.classList.remove('hidden');
    bigPhoto.src = dataPhoto.url;
    likes.textContent = dataPhoto.likes;
    photoAlt.textContent = dataPhoto.description;
    commentsNumber.textContent = dataPhoto.comments.length;
    commentsCount.classList.add('hidden'); // временно
    buttonLoaderComments.classList.add('hidden'); // временно
    body.classList.add('modal-open');
    getCommentUsers()
    closeBigPhoto();
  });
}; //открытие большой фотографии пользователя


export {showBigPhoto};

