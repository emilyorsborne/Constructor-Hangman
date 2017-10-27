var Letter = require('./letters.js');

var Word = function(words) {

    this.words = words;
    this.guessedWord = [];
    this.youWin = false;
    this.guesses = [];

    //Grabs letter in word
    this.grabLetters = function() {
        for (var i = 0; i < this.words.length; i++) {
            var theNewLetter = new Letter(this.words[i]);
            this.guessedWord.push(theNewLetter);

        }
    }
    this.grabLetters();

    //Second Function "method" that finds the letter in the guesses array.
    this.foundIt = function(guessLetter) {
        for (var i = 0; i < this.guesses.length; i++) {
            if (guessLetter == this.guesses[i]) {
                return true;
            }
        }
        console.log(guessLetter);
        var added = false;

        this.guesses.push(guessLetter);
        for (var i = 0; i < this.guessedWord.length; i++) {
            if (this.guessedWord[i].letterin(guessLetter)) {
                this.guessedWord[i].showsLetter = true;
                added = true;
            }
        }
        return added;

    }

    //User input vs. word
    this.comparingWords = function() {
        for (var i = 0; i < this.words.length; i++) {
            if (this.words.charAt(i) != this.guessedWord[i].current) {
                return false;
            }

        }
        return true;
    }

    //Fourth Function it will display the letters in an emptystring.
    this.display = function() {
        var emptyString = "";

        for (var i = 0; i < this.guessedWord.length; i++) {
            emptyString += this.guessedWord[i].current + " ";
        }
        return emptyString;
    }
}


module.exports = Word;