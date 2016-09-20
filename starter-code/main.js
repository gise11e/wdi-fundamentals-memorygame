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

function showTab(tabName) {

	var instructions = document.getElementById('instructions');
	var game = document.getElementById('game');

	if (tabName == 'instructions') {
		instructions.style.display = "block";
		game.style.display = "none";
	}
	else {
		instructions.style.display = "none";
		game.style.display = "block";
	}
}

var gameBoard = document.getElementById('game-board');

var cards = ["card1", "card1", "card3", "card3", "card2", "card2", "card4", "card4"];

var cardsInPlay = [];

var safeToPlay = true;

var totalMatches = 0; 

var messageDiv = document.getElementById('message');

var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {

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

	if( selectedCards[0].getAttribute('data-card') == selectedCards[1].getAttribute('data-card') )
		return true;
	else return false;
}

function resetBoard() {
	confetti.clear();
	totalMatches = 0;
	messageDiv.innerHTML = '';
	shuffle(cards);
    var cardsOnBoard = document.querySelectorAll(".card");
    for (var i=0; i<cardsOnBoard.length; i++) {
    	cardsOnBoard[i].innerHTML = "";
    	cardsOnBoard[i].setAttribute('data-card', cards[i]);
    }
}

function isTwoCards() {

  if (!safeToPlay) {
  	return;
  }

  // Keyword 'this' refers to the DOM Element that was clicked.
  var cardElement = this;

  // Find out what type of card was clicked.
  var typeOfCard = cardElement.getAttribute('data-card');

  cardsInPlay.push(cardElement);


  cardElement.innerHTML = '<img src="' + typeOfCard + '.jpg" alt="' + typeOfCard + ' playing card"/>';

  if (cardsInPlay.length == 2) {

    if (isMatch(cardsInPlay)) {
    	messageDiv.innerHTML = "It's a match!";
    	cardsInPlay = [];

    	totalMatches += 1;

    	if (totalMatches == 4) {
    		messageDiv.innerHTML = "<h2>YOU WON</h2>";
    		confetti.start();
    	}
    }
    else {
    	messageDiv.innerHTML = "try again!";

    	safeToPlay = false;

		// turn both cards back over after 1 second (1000ms).
    	setTimeout(function() {
    		cardsInPlay[0].innerHTML = '';
    		cardsInPlay[1].innerHTML = '';
		    cardsInPlay = [];
		    safeToPlay = true;
    	}, 1000);
    }



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
createBoard();

document.getElementById('reset').addEventListener('click', resetBoard);
