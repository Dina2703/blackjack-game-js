const startBtn = document.querySelector("#start-btn");
const newCard = document.querySelector("#new-card");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

startBtn.addEventListener("click", startGame);
newCard.addEventListener("click", newCardFunc);

let firstCard = 5;
let secondCard = 10;
let cards = [firstCard, secondCard]; //array of cards
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";

function startGame() {
  renderGame();
}

function renderGame() {
  // console.log("game started");
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
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

function newCardFunc() {
  let card = 10;
  sum += card;
  cards.push(card);
  renderGame();
}

// const sentence = ["Hello", "my", "name", "is", "Dina"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " ";
// }
