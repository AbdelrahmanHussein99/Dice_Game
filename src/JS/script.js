"use strict";
//selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceImg = document.querySelector("#dice-img");
const btnNew = document.getElementById("btn--new");
const btnRoll = document.getElementById("btn--roll");
const btnHold = document.getElementById("btn--hold");

//starting conditions
let currentScrore = 0;
let scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
let activePlayer = 0;
diceImg.classList.add("hidden-visb");

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceImg.classList.remove("hidden-visb");
  diceImg.src = `src/images/dice-${dice}.png`;

  if (dice !== 1) {
    currentScrore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScrore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScrore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScrore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScrore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
});
