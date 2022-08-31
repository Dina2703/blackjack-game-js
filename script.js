const startBtn = document.querySelector("#start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

startBtn.addEventListener("click", startGame);

let firstCard = 15;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";

function startGame() {
  console.log("game started");
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "Wohoo! You've got Blackjack 🥳";
  } else {
    isAlive = false;
    message = "You've out the game! 😭";
  }

  messageEl.textContent = message;
}
