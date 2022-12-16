'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👏 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// -------------------------------------------------

// THE SECRET NUMBER GENERATION
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// SCORE
let score = 20;

// Highscore
if (sessionStorage.getItem('memory')) {
  document.querySelector('.highscore').textContent =
    sessionStorage.getItem('memory');
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// EVENT LISTENER WHEN CLICK (types of the event are the click and the function is the event handler)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('👏 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#2f9e44';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.highscore').textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '☝ Too high!' : '👇 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let reloadx = document.querySelector('.highscore').textContent;

  sessionStorage.setItem('memory', reloadx);

  window.location.reload();
});
