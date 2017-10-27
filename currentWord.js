var Word = require("./word.js");

//randomly selects a word from the word list 
var Game = function() {
    this.wordList = ["soccer", "basketball", "football", "rugby", "tennis", "volleyball", "swimming"];
    this.randomWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.currentWord = new Word(this.randomWord);

}
var hangMan = new Game();
// console.log(hangMan.randomWord);

// var wordLength = hangMan.randomWord.length

module.exports = Game;

// module.exports = wordLength;