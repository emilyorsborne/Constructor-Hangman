var Letter = function(letters) {

    this.current = "_"
    this.theLetters = letters;
    //letter appears
    this.showsLetter = false;
    this.letterin = function(letter) {
            if (this.theLetters == letter) {
                this.current = this.theLetters;
                return true;
            }
            return false;
        }
        //Method that will tell us if the letter appears or if "_" will appear.
    this.letterShows = function() {
        return this.current;
    }
};


module.exports = Letter;