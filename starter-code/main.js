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

var createBoard = function() {

	for (var i = 0; i < 4; i++) {

		// Create the div for the card
		var currentCard = document.createElement('div');	
		currentCard.className = "card";

		// Add the div to the gameboard
		gameBoard.appendChild(currentCard);
	}
}

createBoard();