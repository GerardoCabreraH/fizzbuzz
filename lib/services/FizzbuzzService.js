class FizzbuzzService {
    static applyValidationInExplorer(explorer) { 
        if(explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        }else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        }else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }
    static applyValidationInNumber(score) {
        if (score % 3 === 0 && score % 5 === 0) {
            return "FIZZBUZZ";
        } else if (score % 3 === 0) {
            return "FIZZ";
        } else if (score % 5 === 0) {
            return "BUZZ";
        } else {
            return score;
        }
    }
}

module.exports = FizzbuzzService;