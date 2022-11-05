"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

const colors = shuffle(COLORS);

createCards(colors);



/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("grid");

  for (let color of colors) {
    // missing code here ...
    let card = document.createElement('div')
    card.setAttribute('name', color);
    card.setAttribute('class', 'game-card');
    card.style.backgroundColor = 'lightblue';
    // card.setAttribute('data-name', 'cardcard')
    // card.setAttribute('name', 'game-card');
    card.addEventListener('click', (event)=>{
      event.handleCardClick;
    })
    gameBoard.appendChild(card);

    console.log('is this working');
  }
}

let hasFlippedCard = false;
let firstCard, secondCard;

let gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => addEventListener('click', flipCard));

function flipCard(){
  // this.classList.toggle('flip');

  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    gameCards.style.backgroundColor = gameCards.name.value;
  }
  // else
  // {
  //   hasFlippedCard = false;
  //   secondCard = this;

  //   // do the cards match?
  //   if (firstCard.name.value === secondCard.name.value){
  //     // it's a match
  //     firstCard.removeEventListener('click', flipCard);
  //     secondCard.removeEventListener('click', flipCard);
  //   } else {
  //     // not a match
  //     setTimeout(()=>{
  //     firstCard.classList.remove('flip');
  //     secondCard.classList.remove('flip');
  //     }, 1000);


  //   }
  // }

}

/** Flip a card face-up. */

// function flipCard(card) {
//   // ... you need to write this ...
//   card.style.backgroundColor = card.classList[0];
// }

/** Flip a card face-down. */

// function unFlipCard(card) {
//   // ... you need to write this ...
//   card.style.backgroundColor = 'light blue';
// }

/** Handle clicking on a card: this could be first-card or second-card. */

// function handleCardClick(evt) {
//   // ... you need to write this ...
// }
