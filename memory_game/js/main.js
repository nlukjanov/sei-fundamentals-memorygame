var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId]);

  cardsInPlay.push(cards[cardId]);

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