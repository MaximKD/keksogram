/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import {getPhotos} from './data.js';

// eslint-disable-next-line no-unused-vars
import {createPhoto} from './photoModulation.js';

import {showBigPhoto} from './showBigPhoto.js';

const dataPhotos = getPhotos(25);
createPhoto(dataPhotos);

let usersPhotos = document.querySelectorAll('.picture');

for (let i = 0; i < usersPhotos.length; i++) {
  showBigPhoto(usersPhotos[i], dataPhotos[i]);
}


