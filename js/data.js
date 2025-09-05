import { destroyExistingSlider } from './effectsLevelAdd.js';

let editingPhotoWindow = document.querySelector('.img-upload__overlay');
let body = document.querySelector('body');
let photo = document.querySelector('.img-upload__preview').querySelector('img');
let formUploadPhoto = document.querySelector('.img-upload__form');
let buttonUploadForm = formUploadPhoto.querySelector('.img-upload__submit');
let success = document.querySelector('#success').content.querySelector('.success');
let successMessage = success.querySelector('.success__inner');
let successButton = successMessage.querySelector('.success__button');
let error = document.querySelector('#error').content.querySelector('.error');
let errorMessage = error.querySelector('.error__inner');
let errorButton = errorMessage.querySelector('.error__button');
let errorTitle = errorMessage.querySelector('.error__title');
let photoFilter = document.querySelector('.img-filters');

// показ ошибки в случае не возмодности получения фотографий от сервера
let showErrorLoadingPhotoUsers = (TextErrore) => {
  let div = document.createElement('div');
  div.classList.add('errore__message');
  let erroreText = document.createElement('p');
  erroreText.classList.add('errore__message_text');
  erroreText.textContent = `${TextErrore} - произошла ошибка проверте соединение с интернетом или попробуйте позже.`;
  div.appendChild(erroreText);
  body.appendChild(div);

  setTimeout(() => {body.removeChild(div)}, 5000);
};

// получение фотографий пользователей от сервера
let dataPhotosUsers = (cb) =>{
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((Response) => {
      if (Response.ok) {
        return Response;
      }
      throw new Error(`${Response.status} - ${Response.statusText}`);
    })
    .then((Response) => Response.json())
    .then((data) => {
      cb(data);
    })
    .then(() => {photoFilter.classList.remove('img-filters--inactive')})
    .catch((error) => showErrorLoadingPhotoUsers(error));
};


// закрытие сообщения в случае успешной отправки фотографии
let closeMessageSuccess = () => {
  successButton.addEventListener('click', () => {
    body.removeChild(success);
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      body.removeChild(success);
    }
  });
  success.addEventListener('click', () => {
    body.removeChild(success);
  });
};

// показ сообщения в случае успешной отправки сообщения

let successLoadPhoto = () => {
  body.appendChild(success);
  success.style.position = 'fixed';
  success.style.zIndex = 10;
  editingPhotoWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  photo.removeAttribute('class');
  photo.style.filter = '';
  destroyExistingSlider();
  photo.src = '';

  successMessage.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  closeMessageSuccess();
};



// закрытие сообщения в случае ошибки отправки фотографии
let closeMessageError = () => {
  errorButton.addEventListener('click', () => {
    body.removeChild(error);
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      body.removeChild(error);
    }
  });
  error.addEventListener('click', () => {
    body.removeChild(error);
  });
};

// показ сообщения в случае ошибки отправки фотографии

let errorLoadPhoto = (err) => {
  body.appendChild(error);
  error.style.position = 'fixed';
  error.style.zIndex = 10;
  errorTitle.textContent = `Ошибка загрузки файла: ${  err}`;
  errorTitle.style.lineHeight = '40px';
  editingPhotoWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  photo.removeAttribute('class');
  photo.style.filter = '';
  destroyExistingSlider();
  photo.src = '';

  errorMessage.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  closeMessageError();
};

// блокировка кнопки отправки, чтоб не отправить форму несколько раз
let blockButtonUploadForm = () => {
  buttonUploadForm.disabled = true;
  buttonUploadForm.textContent = 'Загружаю...';
};

// разблокирование кнопки отправки, после успешной отправки или не отправки сообщения
let  unblockButtonUploadForm = () => {
  buttonUploadForm.disabled = false;
  buttonUploadForm.textContent = 'Отправить';
};


// добавление фотографии пользователя на сервер
let setUsersFormSubmit = () => {
  formUploadPhoto.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockButtonUploadForm();

    const formData = new FormData(evt.target);

    fetch('https://25.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then(() => successLoadPhoto())
      .catch((err) => errorLoadPhoto(err))
      .then(() => unblockButtonUploadForm());
  });
};

// функция устранения дребезг
function debounce (callback, timeoutDelay) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


//азобраться где может пригодиться

// function throttle (callback, delayBetweenFrames) {
//   // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
//   // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
//   let lastTime = 0;

//   return (...rest) => {
//     // Получаем текущую дату в миллисекундах,
//     // чтобы можно было в дальнейшем
//     // вычислять разницу между кадрами
//     const now = new Date();

//     // Если время между кадрами больше задержки,
//     // вызываем наш колбэк и перезаписываем lastTime
//     // временем "последнего кадра"
//     if (now - lastTime >= delayBetweenFrames) {
//       callback.apply(this, rest);
//       lastTime = now;
//     }
//   };
// }

export {dataPhotosUsers, setUsersFormSubmit, debounce};


