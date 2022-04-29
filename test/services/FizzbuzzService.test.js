const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test para ExplorerService", () => { 
    test("Requerimientos 1: Explorer score trick", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer.trick).toBe(1);
    });
    test("Requerimientos 2: Explorer fizz trick", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer.trick).toBe("FIZZ");
    });
    test("Requerimientos 3: Explorer buzz trick", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer.trick).toBe("BUZZ");
    });
    test("Requerimientos 4: Explorer fizzbuzz trick", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer.trick).toBe("FIZZBUZZ");
    });
    test("Requerimientos 5: Score trick", () => {
        const explorer = FizzbuzzService.applyValidationInNumber(1);
        expect(explorer).toBe(1);
    });
    test("Requerimientos 6: Fizz trick", () => {
        const explorer = FizzbuzzService.applyValidationInNumber(3);
        expect(explorer).toBe("FIZZ");
    });
    test("Requerimientos 7: Buzz trick", () => {
        const explorer = FizzbuzzService.applyValidationInNumber(5);
        expect(explorer).toBe("BUZZ");
    });
    test("Requerimientos 8: FizzBuzz trick", () => {
        const explorer = FizzbuzzService.applyValidationInNumber(15);
        expect(explorer).toBe("FIZZBUZZ");
    });
});
