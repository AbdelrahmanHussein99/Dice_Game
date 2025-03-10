"use strict";
//selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const player0El = document.getElementById("player--0");
const player1El = document.getElementById("player--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceImg = document.querySelector("#dice-img");
const btnNew = document.getElementById("btn--new");
const btnRoll = document.getElementById("btn--roll");
const btnHold = document.getElementById("btn--hold");

//starting conditions
let currentScrore, scores, activePlayer, playing;

//----
const init = function () {
  currentScrore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceImg.classList.add("hidden-visb");
  player0El.classList.remove("opacity-50");
  player0El.classList.remove("bg-gray-700");
  player1El.classList.add("opacity-50");
  player1El.classList.remove("bg-gray-700");
};
init();
const changeActivePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0El.classList.toggle("opacity-50");
  player1El.classList.toggle("opacity-50");
  currentScrore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceImg.classList.remove("hidden-visb");
    diceImg.src = `src/images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScrore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScrore;
    } else {
      changeActivePlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScrore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceImg.classList.add("hidden-visb");
      document
        .getElementById(`player--${activePlayer}`)
        .classList.add("bg-gray-700");
      //.>>>
    } else {
      changeActivePlayer();
    }
  }
});
btnNew.addEventListener("click", init);
