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
	shuffle(cards);
    var cardsOnBoard = document.querySelectorAll(".card");
    for (var i=0; i<cardsOnBoard.length; i++) {
    	cardsOnBoard[i].innerHTML = "";
    	cardsOnBoard[i].setAttribute('data-card', cards[i]);
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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(cards);
console.log(cards);
createBoard();

document.getElementById('reset').addEventListener('click', resetBoard);
