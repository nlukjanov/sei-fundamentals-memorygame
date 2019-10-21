var cards = [{
  "rank": "queen",
  "suit": "hearts",
  "cardImage": "images/queen-of-hearts.png"
},
{
  "rank": "queen",
  "suit": "diamonds",
  "cardImage": "images/queen-of-diamonds.png"
},
{
  "rank": "king",
  "suit": "hearts",
  "cardImage": "images/king-of-hearts.png"
},
{
  "rank": "king",
  "suit": "diamonds",
  "cardImage": "images/king-of-diamonds.png"
}];
var cardsInPlay = [];

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    var gameBoard = document.getElementById('game-board');
    gameBoard.appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
  }
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  
  console.log("User flipped " + cards[cardId].rank);

  cardsInPlay.push(cards[cardId].rank);

  console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);

  function checkForMatch() {
    if (cardsInPlay.length === 2) {
      if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You have found a match");
      } else {
        alert("Sorry, try again");
      }
    }
  }
  checkForMatch();
}

createBoard();