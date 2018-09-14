

var randomNumber = Math.floor(Math.random() * 10 ) + 1;
var guess = prompt('Hello. I am thinking of a number between 1 and 10. What is it?');
if (parseInt(guess) === randomNumber ) {
  document.write('<h2>You guessed the number!</h2>');
} else {
    document.write('<h2>Sorry. The number was ' + randomNumber + '.</h2>');
}