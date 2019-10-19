var cards = [{
  "rank": "queen",
  "suit": "hearts",
  "cardImage": "images/queen-of-hearts"
},
{
  "rank": "queen",
  "suit": "diamonds",
  "cardImage": "images/queen-of-diamonds"
},
{
  "rank": "king",
  "suit": "hearts",
  "cardImage": "images/queen-of-hearts"
},
{
  "rank": "king",
  "suit": "diamonds",
  "cardImage": "images/queen-of-diamonds"
}];
var cardsInPlay = [];

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank);

  cardsInPlay.push(cards[cardId].rank);

  console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suit);

  function checkForMatch() {
    if (cardsInPlay.length === 2) {
      if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You have found a match");
      } else {
        console.log("Sorry, try again");
      }
    }
  }
  checkForMatch();
}

flipCard(0);
flipCard(2);