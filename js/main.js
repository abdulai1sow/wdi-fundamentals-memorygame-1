console.log("Up and running!");

/* var cardOne = "queen"
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

var cards=["queen", "queen", "king", "king"];

var cardsInPlay=[];

var flipCard=function(cardId) {
  console.log("User flipped" + cards[cardId]);
}
flipCard();

  // Mine
  // var cardOne=[0];
  // cardsInPlay.push('cardOne');
  //
  // console.log("User flipped queen");
  //
  // var cardTwo=[2];
  // cardsInPlay.push('cardTwo');

// // Actual
// var cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);
//
// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);
