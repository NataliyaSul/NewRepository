'use strict';

let randomNum = parseInt(Math.random() * 100);

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
} isNum();

function guessNum(serNum) {

  function guess() {
    let userNum = prompt('Угадай число от 1 до 100', '');

    if (userNum === null) {
      alert('Игра оконченна!');

    }

    else if (userNum > randomNum) {
      alert('Загаданное число меньше');
      return guess(userNum);
    }

    else if (userNum < randomNum) {
      alert('Загаданное число больше');
      return guess(userNum);
    }

    if (isNaN(userNum)) {
      alert('Введите число!');
      return guess(userNum);
    }


    else if (userNum == randomNum) {
      alert('Верно, Вы угадали загаданное число!');

    }
  } guess();
} guessNum();








