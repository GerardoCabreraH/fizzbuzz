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
        if (score % 5 === 0 && score % 3 === 0) {
            const validationFizzBuzz = {
                score: score,
                trick: "FIZZBUZZ"
            };
            return validationFizzBuzz;
        } else if (score % 5 === 0) {
            const validationBuzz = {
                score: score,
                trick: "BUZZ"
            };
            return validationBuzz;
        } else if (score % 3 === 0) {
            const validationFizz = {
                score: score,
                trick: "FIZZ"
            };
            return validationFizz;
        } else {
            const validationSocre = {
                score: score,
                trick: score
            };
            return validationSocre;
        }
    }
}

module.exports = FizzbuzzService;