//Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./letter.js");
var inquirer = require('inquirer');


function Word(nextWord) {
  // An array of new Letter objects representing the letters of the underlying word
  this.characters = [];
  this.outputWord = ['java', 'software+engieer', 'googlefu', 'python', 'constructor']
  for (var i = 0; i < this.outputWord.length; i++) {
    var testLetter = new Letter(this.outputWord[i]);
    this.characters.push(testLetter);
  }
  // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
  this.revealWord = function() {
    for (var i = 0; i < this.outputWord.length; i++) {
      var addedChar = new Letter(this.outputWord[i]);
      this.characters.push(addedChar);
    }
  }


}
// var testWord =  new Word ([]);
// console.log(testWord);
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
module.exports = Word;
