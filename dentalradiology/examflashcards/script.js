const cards = questions;

let currentCardIndex = 0;
let isCardFlipped = false;

let cardHistory = [];
let historyIndex = -1;
let unseenCards = Array.from({ length: cards.length }, (_, i) => i);

// New variable for card counter
let cardCounter = 1;

function displayCard(index) {
  const cardElement = document.getElementById("current-card");
  const front = cardElement.querySelector(".card-front p");
  const back = cardElement.querySelector(".card-back p");

  front.innerHTML = cards[index].question;
  back.innerHTML = cards[index].answer;

  // Update card counter
  document.getElementById("card-counter").innerText = `Card ${cardCounter} out of ${cards.length}`;
}

function getRandomCardIndex() {
  if (unseenCards.length === 0) {
    // Reset when all cards have been seen
    unseenCards = Array.from({ length: cards.length }, (_, i) => i);
    cardCounter = 0;  // Reset counter
  }

  const randomIndex = Math.floor(Math.random() * unseenCards.length);
  const cardIndex = unseenCards.splice(randomIndex, 1)[0];
  
  cardCounter++;  // Increment counter
  return cardIndex;
}

// ... (rest of your existing code)


function nextCard() {
  // Refill the unseenCards array if it's empty
  if (unseenCards.length === 0) {
    unseenCards = Array.from({ length: cards.length }, (_, i) => i);
    cardCounter = 0;  // Reset counter
  }

  // Pick a random index from unseenCards
  const randomIndex = Math.floor(Math.random() * unseenCards.length);
  currentCardIndex = unseenCards[randomIndex];

  // Remove the chosen card from unseenCards
  unseenCards.splice(randomIndex, 1);

  // Add to history and update position
  cardHistory.push(currentCardIndex);
  historyIndex++;

  cardCounter++;  // Increment counter

  isCardFlipped = false;
  updateCardFlip();
  displayCard(currentCardIndex);
}



function previousCard() {
  if (historyIndex > 0) {
    historyIndex--; // go back in history
    currentCardIndex = cardHistory[historyIndex]; // set the current card from history
	 cardCounter--;
    isCardFlipped = false; // reset the card flip status
    updateCardFlip();
    displayCard(currentCardIndex); // display the card
  }
}



function flipCard() {
  isCardFlipped = !isCardFlipped;
  updateCardFlip();
}

function updateCardFlip() {
  const cardElement = document.getElementById("current-card");
  if (isCardFlipped) {
    cardElement.style.transform = "rotateY(180deg)";
  } else {
    cardElement.style.transform = "rotateY(0deg)";
  }
}

// Display the first card and add the flip click event when the page loads
window.onload = function() {
  // Randomize the first card
  currentCardIndex = Math.floor(Math.random() * cards.length);

  // Push the first (now randomized) card onto the history stack
  cardHistory.push(currentCardIndex);
  historyIndex++;

  displayCard(currentCardIndex);
  document.getElementById("current-card").addEventListener("click", flipCard);
};