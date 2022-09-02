const startBtn = document.querySelector("#start-btn");
const newCard = document.querySelector("#new-card");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const player = document.getElementById("player");

startBtn.addEventListener("click", startGame);
newCard.addEventListener("click", newCardFunc);

let playerInfo = {
  name: "John",
  chips: 120,
};

player.textContent = playerInfo.name + ": $" + playerInfo.chips;

let cards = []; //array of cards
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
  return randomNumber;
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
  if (isAlive && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

console.log(cards);

// const sentence = ["Hello", "my", "name", "is", "Dina"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " ";
// }

//RETURN VALUE
// let player1Time = 102;
// let player2Time = 107;

// function totalraceTime() {
//   return player1Time + player2Time;
// }

// let total = totalraceTime();

// console.log(total);

//GET RANDOM NUMBER
// let randomNumberFloor = Math.floor(Math.random() * 2);
// let randomNumberCeil = Math.ceil(Math.random() * 2);

// console.log(randomNumberFloor); //can return only 0, 1
// console.log(randomNumberCeil); //can return only 1, 2

// function rollDice() {
//   let diceNumber = Math.floor(Math.random() * 6) + 1;
//   return diceNumber;
// }

// console.log(rollDice());

// Practice - Conditional
// let age = 67;
// if (age < 6) {
//   console.log("free");
// } else if (age < 18) {
//   console.log("child discount");
// } else if (age < 27) {
//   console.log("student discount");
// } else if (age < 67) {
//   console.log("full price");
// } else {
//   console.log("senior citizen discount");
// }

//Practice - Loops& Arrays
// const largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// console.log(`The ${largeCountries.length} largest countries in the world: `);
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log(`- ${largeCountries[i]}`);
// }

//Practice = push(), pop(), unshift(), shift()

// const largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// largeCountries.pop();
// largeCountries.shift();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");

// console.log(largeCountries);

//Practica - Logical and Conditional operators
// let dayOfMonth = 13;
// let weekday = "Friday";
// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("😱");
// }

//Practice - 'Rock paper & scissors'

// let hands = ["rock", "paper", "scissor"];

// function gameStart() {
//   console.log(hands[Math.floor(Math.random() * 3)]);
// }
// gameStart();
//second version
// function getHand() {
//   let randomIndex = Math.floor(Math.random() * 3);
//   return hands[randomIndex];
// }

// console.log(getHand());

// Practice - for loop, a conditional statement, textContent property

let fruit = ["🍏", "🍎", "🍊", "🍏", "🍊", "🍊"];
let appleShelf = document.querySelector(".apple-shelf");
let orangeShelf = document.querySelector(".orange-shelf");

let apple = [];
let orange = [];
function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍏" || fruit[i] === "🍎") {
      apple.push(fruit[i]);
      appleShelf.textContent = apple;
    } else {
      orange.push(fruit[i]);
      orangeShelf.textContent = orange;
    }
  }
}

// console.log(apple);
// console.log(orange);

sortFruit();
