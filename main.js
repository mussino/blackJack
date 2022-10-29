//The game should get 21 points or closest to 21, but never over 21.

let firstCard = 2;
let secondCard = 11; 
let hasBlackJack = false;
let isAlive = true;
let sum = firstCard + secondCard;
let message = "";
let messageEl = document.getElementById('start-game')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

console.log(cardsEl);



function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game! Looser!!!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + ' ~ ' + secondCard;
}

function newCard() {
    //console.log('Drawing a new card from the deck!')
    let moreCards = 4;
    sum += moreCards;
    startGame();
}

