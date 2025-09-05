/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import {dataPhotosUsers, setUsersFormSubmit, debounce} from './data.js';

// eslint-disable-next-line no-unused-vars
import {createPhotoHTMLNodes} from './photoModulation.js';

import {filterPhotosAddButtons} from './filterPhotos.js';

let timeoutDelay = 500;

// заебать влада почему то что снизу равно этому dataPhotosUsers(createPhotoHTMLNodes);
dataPhotosUsers((photos) => {
  createPhotoHTMLNodes(photos);
  filterPhotosAddButtons(debounce(()=>createPhotoHTMLNodes(photos), timeoutDelay));
});

setUsersFormSubmit();


