let picturesUsers = document.querySelector('.pictures');
let pictureUser = document.querySelector('#picture').content.querySelector('.picture');


let createPhoto = (pictures) => {
  pictures.forEach((picture) => {
    let newPicture = pictureUser.cloneNode(true);
    newPicture.querySelector('.picture__img').src = picture.url;
    newPicture.querySelector('.picture__img').alt = picture.description;
    newPicture.querySelector('.picture__likes').textContent = picture.likes;
    newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
    picturesUsers.appendChild(newPicture);
  });
};
export {createPhoto};


