//The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses


var inquirer = require('inquirer');
var Word = require("./word.js");

//global variable:
var outputWord =  new Word (this.outputWord);


inquirer.prompt([
  {
    name: "start message",
    message: "Hello! What is your name?"
   }, {
    name: "question",
    type: "confirm",
    message: 'Are you ready to guess the word?'
  },
]).then(function(answers) {
    if(answers.question === true){
      console.log('Get Ready! Let\'s Play!');
      inputGuess();

    } else {
      console.log('Aww shucks see ya next time...')
    }
});

function inputGuess() {
  inquirer.prompt([
    {
      name: "guess",
      type: "input",
      message: "Please guess a Letter"
    }
  ]).then(function(answers){
    console.log(answers);
    console.log(outputWord);
    inputGuess();
  });

}

// function outputWord(){
//   console.log('yo');
// }
