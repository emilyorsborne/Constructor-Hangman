//CONSTRUCTOR FUNCTION
//Instruction:
var prompt = require("prompt");
var Game = require('./currentWord.js');
// var wordLength = require('./words.js');
var hangmanGame = new Game();
var userGuess = 10;
// var userGuess = wordLength;

prompt.start(); //starting the prompt
letTheGameBegin(userGuess);

function letTheGameBegin(guesses) {
    console.log("Guesses left: " + guesses);
    if (hangmanGame.currentWord.comparingWords() == true) {
        console.log("You win");
        return;
    }
    //if the user is out of gusses!
    if (guesses <= 0) {
        console.log("Game Over!");
        return;
    }

    // will display the "_" and the number of spaces in the game.
    console.log(hangmanGame.currentWord.display());

    prompt.get(["theGuess"], function(err, result) {
        if (err) {
            return err;
        }
        //compares the letter from secretword and the letter typed.
        if (hangmanGame.currentWord.foundIt(result.theGuess) == false) {
            guesses--;
        }
        letTheGameBegin(guesses);

    });
}