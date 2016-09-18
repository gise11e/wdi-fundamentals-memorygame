var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if (cardOne === cardTwo || cardThree === cardFour) {
//	window.alert ("You found a match");
//}
//else {
//	window.alert ("Sorry. Try again!");
//}

var gameBoard = document.getElementById('game-board');

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var createBoard = function() {

	for (var i = 0; i < 4; i++) {

		// Create the div for the card
		var cardElement = document.createElement('div');	
		cardElement.className = "card";

		// Add the div to the gameboard
		gameBoard.appendChild(cardElement);

		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
}


function isMatch(selectedCards) {
	if( selectedCards[0] == selectedCards[1] )
		return true;
	else return false;
}

function resetBoard() {
    var cardsOnBoard = document.querySelectorAll(".card");
    for (var i=0; i<cardsOnBoard.length; i++) {
    	cardsOnBoard[i].innerHTML = "";
    }
}

function isTwoCards() {

  // Find out what type of card was clicked.
  var typeOfCard = this.getAttribute('data-card');

  cardsInPlay.push(typeOfCard);

  this.innerHTML = '<img src="' + typeOfCard + '.png" alt="King of Spades" />';

  if (cardsInPlay.length == 2) {

  	var messageDiv = document.getElementById('message');

    if (isMatch(cardsInPlay)) {
    	messageDiv.innerHTML = "It's a match!";
    }
    else {
    	messageDiv.innerHTML = "try again!";
    }

    cardsInPlay = [];
  }

}

createBoard();

document.getElementById('reset').addEventListener('click', resetBoard);
