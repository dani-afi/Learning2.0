'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.dicebtn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Start conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.Generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2.Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.Check for rolled 1: if id true,
  if (dice !== 1) {
    //add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // current0El.textContent = currentScore; //change later
  } else {
    //switch to next player
    switchPlayer();
  }

  activePlayer = activePlayer === 0 ? 1 : 0;
});

btnHold.addEventListener('click', function () {
  //1.add current score to active player score
  scores[activePlayer] += currentScore;
  // scores[1]=scores[1]+currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //2.check if player's score is>=100
  //finish the game

  //Switch to the next player
  switchPlayer();
});
