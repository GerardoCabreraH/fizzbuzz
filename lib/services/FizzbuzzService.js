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
    static applyValidationInNumber(number) {
        if (number % 5 === 0 && number % 3 === 0) {
            const validationFizzBuzz = {
                score: number,
                trick: "FIZZBUZZ"
            };
            return validationFizzBuzz;
        } else if (number % 5 === 0) {
            const validationBuzz = {
                score: number,
                trick: "BUZZ",
            };
            return validationBuzz;
        } else if (number % 3 === 0) {
            const validationFizz = {
                score: number,
                trick: "FIZZ",
            };
            return validationFizz;
        } else {
            const validationSocre = {
                score: number,
                trick: number,
            };
            return validationSocre;
        }
    }
}

module.exports = FizzbuzzService;