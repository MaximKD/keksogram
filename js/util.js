/* eslint-disable prefer-template */
/* eslint-disable no-console */

// генератор случайного чила (от, до)

function generateNumber (firstNumber, secondNumber = 1) {
  let min = Math.ceil(firstNumber);
  let max = Math.floor(secondNumber);
  if (secondNumber < firstNumber) {
    min = Math.ceil(secondNumber);
    max = Math.floor(firstNumber);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkComment (commentUser, lengString) {
  return commentUser.length <= lengString;
}


const getRandomArrowElement = (elements) => elements[generateNumber(0, elements.length-1)];

// создаем уникальные id для пользователей

function createUsersIdGenerator (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = generateNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = generateNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue; // не особо понимаю зачем возваращаем именно эту переменную
  };
}

const commentUserId = createUsersIdGenerator(1, 100);

export {getRandomArrowElement, generateNumber, checkComment, commentUserId};
