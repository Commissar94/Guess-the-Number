'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 5;
  document.querySelector(`.score`).textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Начни угадывать...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // Нет ввода
  if (!guess) {
    displayMessage(`🚫 Нет номера`);

    //Победа
  } else if (guess === secretNumber) {
    displayMessage(`🏆 Верно!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //Неверный результат
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `☝ Перебор` : `👇 Недобор`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`😑 Это прискорбно`);

      document.querySelector(`.score`).textContent = 0;
    }
  }
});
