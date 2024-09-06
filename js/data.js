/* eslint-disable no-console */
import {getRandomArrowElement} from './util.js';
import {generateNumber} from './util.js';
import {commentUserId} from './util.js';


const NAMES = [
  'Игорь Складчиков',
  'Дмитрий Пушной',
  'Виктория Сикретова',
  'Клавдий Кланий',
  'Минета Вротоберучая',
  'Ленни Кунилизи',
  'Василий Находкин',
  'Ашот Пашотович'
];


const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'В этом кадре моя душа',
  'Тут я просто чихнул с фотиком в руках',
  'Здесь каждый увидит свое отражение',
  'На фото именно ТЫ'
];

const createUsersComments = () => ({
  id: commentUserId(),
  avatar: `img/avatar-${  generateNumber(1, 6)  }.svg`,
  message: getRandomArrowElement(COMMENTS),
  name: getRandomArrowElement(NAMES),
});

const createUsersPhoto = (index) => ({
  id: index,
  url: `photos/${  index  }.jpg`,
  description: getRandomArrowElement(DESCRIPTIONS),
  likes: generateNumber(15, 200),
  comments: Array.from({length: generateNumber(0, 6)}, createUsersComments),
});

const getPhotos = (number) => {
  const arr = [];
  for (let index = 1; index <= number; index++) {
    arr.push(createUsersPhoto(index));
  }
  return arr;
};



export {getPhotos};


