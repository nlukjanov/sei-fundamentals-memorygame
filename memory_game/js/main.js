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
},
{
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

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

var score = 0;
var notification = document.getElementById('notification');
var playerScore = document.getElementById('player-score');
var node = document.getElementById('game-board');

function newBoard() {
  cardsInPlay = [];
  node.innerHTML = "";
  createBoard();
}

function notificationReset() {
  notification.style.color = "white";
  notification.innerHTML = ' ';
}

function resetGame() {
  score = 0;
  playerScore.innerHTML = score;
  notificationReset();
  newBoard();
}

function flipCard() {

  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId]);
  this.setAttribute('src', cards[cardId].cardImage);

  function checkForMatch() {
    
    if (cardsInPlay.length === 2) {
      if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
        notification.style.color = "green";
        notification.innerHTML = 'It is a match!';
        score = score + 1;
        playerScore.innerHTML = (score);
        var cardsToFlipBack = document.querySelectorAll('img');
        setTimeout(function() {
          for (let i = 0; i < cardsToFlipBack.length; i++) {
            cardsToFlipBack[i].setAttribute('src', 'images/back.png');
            notificationReset();
          };
        }, 1000);
      } else {
        notification.style.color = "red";
        notification.innerHTML = 'Try again!';
        var cardsToFlipBack = document.querySelectorAll('img');
        setTimeout(function() {
          for (let i = 0; i < cardsToFlipBack.length; i++) {
            cardsToFlipBack[i].setAttribute('src', 'images/back.png');
            notificationReset();
          };
        }, 1000);
      }
      setTimeout(newBoard, 1000);
    }
    
  }
  checkForMatch();
}

createBoard();