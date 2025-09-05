let buttonsFilter = document.querySelectorAll('.img-filters__button');
let picturesUsers = document.querySelector('.pictures');
let pictureUsers = picturesUsers.getElementsByClassName('picture');

let array =[];


let filterPhotosAddButtons = (cb) => {
  buttonsFilter.forEach((buttonFilter) => {
    buttonFilter.addEventListener('click', () => {
      array = Array.from(pictureUsers);
      array.forEach((pictureUser) => {
        picturesUsers.removeChild(pictureUser);
      });
      buttonsFilter.forEach((targetButton) => {
        targetButton.classList.remove('img-filters__button--active');
        buttonFilter.classList.add('img-filters__button--active');
      });
      cb();
    });
  });
};

export {filterPhotosAddButtons};
