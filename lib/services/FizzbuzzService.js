class FizzbuzzService {
    static assignFizzTrick(explorer) {
        if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }
    }

    static assignBuzzTrick(explorer) {
        if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }
    }

    static assignFizzBuzzTrick(explorer) {
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
    }

    static applyValidationInExplorer(explorer) {
        if(this.assignFizzTrick(explorer) && this.assignBuzzTrick(explorer) && this.assignFizzBuzzTrick(explorer)){
            return explorer;
        }
        if (this.assignFizzTrick(explorer) || this.assignBuzzTrick(explorer) || this.assignFizzBuzzTrick(explorer)) {
            return explorer;
        }
        else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }
}

module.exports = FizzbuzzService