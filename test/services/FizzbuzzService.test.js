const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe("Test para ExplorerService", () => { 
    test("Requerimientos 1: Score trick", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorer.trick).toBe(1)
    })
    test("Requerimientos 2: Fizz trick", () => {
        const explorer3 = {name: "Explorer3", score: 3}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer3)
        expect(explorer.trick).toBe("FIZZ")
    })
    test("Requerimientos 3: Buzz trick", () => {
        const explorer5 = {name: "Explorer5", score: 5}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer5)
        expect(explorer.trick).toBe("BUZZ")
    })
    test("Requerimientos 4: FizzBuzz trick", () => {
        const explorer15 = {name: "Explorer15", score: 15}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer15)
        expect(explorer.trick).toBe("FIZZBUZZ")
    })
})
