//The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
// Letter.js should not require any other files.
// Word.js should only require Letter.js

var inquirer = require('inquirer');
var Letter = require("./index.js");

inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  // }, {
  //   name: "position",
  //   message: "What is your current position?"
  // }, {
  //   name: "age",
  //   message: "How old are you?"
  // }, {
  //   name: "language",
  //   message: "What is your favorite programming language?"
   }
]).then(function(answers) {
  // initializes the variable newProgrammer to be a programmer object which will take
  // in all of the user's answers to the questions above
  // var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language);
  // // printInfo method is run to show that the newProgrammer object was successfully created and filled
  // newProgrammer.printInfo();

  console.log(answers.name);
});
