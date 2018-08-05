/*
 * Create a list that holds all of your cards
 */
const cardList = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb','fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Shuffles list of cards
shuffle(cardList);

//Updates card deck that is displayed using shuffled card list
for (i = 0; i < cardList.length; i++) {
  const currCard = document.getElementsByClassName('card')[i];

  currCard.children[0].className = cardList[i];
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//Function to toggle class of selected card
function showCard (evt) {
  evt.classList.add('show', 'open');
}

//Array to hold list of open cards
const openCardList = [];

//Adds selected card to openCardList
function addCard (crd) {
  openCardList.push(crd);
}

//Tests whether or not cards in openCardList have the same picture
function matchTest (list) {
  const cardOne = list[0].firstElementChild.classList.value;
  const cardTwo = list[1].firstElementChild.classList.value;

  if (cardOne == cardTwo) {
    return true;
  }
    else {
      return false;
    }
}

//Function that adds match class to cards if matched, turns cards over again if not matched
function twoCards (list) {
  if (matchTest(list)) {
    list[0].classList.add('match');
    list[1].classList.add('match');
  } else {
    console.log("They don't match!")
    list[0].classList.remove('open', 'show');
    list[1].classList.remove('open', 'show');
  }
}

//Function that counts number of open cards, handles matching if two cards are open
function openCardCount (list) {
  if (list.length == 2) {
    twoCards(list);
  }
}

//Store deck elements in a variable
const deck = document.getElementsByClassName('deck')[0];

//Event listener to run showCard function on clicked card
deck.addEventListener('click', function (evt) {
  if (evt.target.nodeName === "LI") {
    showCard (evt.target);
    addCard (evt.target);
    openCardCount(openCardList);
  }
})
