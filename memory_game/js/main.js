var deck = [];

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

for (let suit in suits) {
  for (let value in values) {
    deck.push({
      rank: `${values[value]}`,
      suit: `${suits[suit]}`,
      cardImage: `images/cards/${values[value]}${suits[suit][0]}.svg`
    });
  }
};

function shuffleDeck() {
  let m = deck.length, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    [deck[m], deck[i]] = [deck[i], deck[m]];
  }
  return deck;
}
shuffleDeck();

var cards = [deck[0], deck[1], deck[2], deck[3], deck[0], deck[1], deck[2], deck[3]];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(cards);

var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');
function createBoard() {
  gameBoard.style.pointerEvents = 'auto';
  for (let i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);

    gameBoard.appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
  }
}

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

var score = 0;
var numberOfTries = 0;
var notification = document.getElementById('notification');
var playerScore = document.getElementById('player-score');
var displayNumberOfTries = document.getElementById('number-of-tries');
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
  var numberOfTries = 0;
  playerScore.innerHTML = score;
  displayNumberOfTries.innerHTML = numberOfTries;
  notificationReset();
  shuffleDeck();
  cards = [deck[0], deck[1], deck[2], deck[3], deck[0], deck[1], deck[2], deck[3]];
  shuffle(cards);
  newBoard();
}

function flipCard() {

  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId]);
  this.setAttribute('src', cards[cardId].cardImage);

  function checkForMatch() {
    if (cardsInPlay.length === 2) {
      gameBoard.style.pointerEvents = 'none';
      numberOfTries = numberOfTries + 1;
      displayNumberOfTries.innerHTML = numberOfTries;
      if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit) {
        notification.style.color = "green";
        notification.innerHTML = 'It is a match!';
        score = score + 1;
        playerScore.innerHTML = (score);
      } else {
        notification.style.color = "red";
        notification.innerHTML = 'Try again!';
      }
      setTimeout(newBoard, 1000);
      // shuffle(cards); // uncomment to make it really hard to win :))
    }
    
  }
  checkForMatch();
}

createBoard();