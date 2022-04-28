const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Obtener explorers por node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });
    test("Requerimiento 2: Obtener explorers por java", () => {
        const explorersInJava = ExplorerController.getExplorersByMission("java");
        expect(explorersInJava.length).toBe(5);
    });
    test("Requerimiento 3: Obtener usernames por node", () => {
        const explorersInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersInNode.mission).toBe("node");
        expect(explorersInNode.explorers.length).toBe(10);
    });
    test("Requerimiento 4: Obtener usernames por java", () => {
        const explorersInJava = ExplorerController.getExplorersUsernamesByMission("java");
        expect(explorersInJava.mission).toBe("java");
        expect(explorersInJava.explorers.length).toBe(5);
    });
    test("Requerimiento 5: Obtener el numero de explorers por node", () => {
        const explorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersInNode.mission).toBe("node");
        expect(explorersInNode.quantity).toBe(10);
    });
    test("Requerimiento 6: Obtener el numero de explorers por java", () => {
        const explorersInJava = ExplorerController.getExplorersAmonutByMission("java");
        expect(explorersInJava.mission).toBe("java");
        expect(explorersInJava.quantity).toBe(5);
    });
    test("Requerimiento 7: Obtener el validador de explorers por node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        const getvalidatorInNode = explorersInNode.map((explorer) => ExplorerController.getValidationInExplorer(explorer));
        expect(getvalidatorInNode.length).toBe(10);
    });
    test("Requerimiento 8: Obtener el validador tricks de explorers por java", () => {
        const explorersInJava = ExplorerController.getExplorersByMission("java");
        const getvalidatorInJava = explorersInJava.map((explorer) => ExplorerController.getValidationInExplorer(explorer));
        expect(getvalidatorInJava.length).toBe(5);
    });
    test("Requerimiento 9: Obtener el validador score", () => {
        const getvalidatorInScore = ExplorerController.getValidationInScore(1);
        expect(getvalidatorInScore.trick).toBe(1);
    });
    test("Requerimiento 10: Obtener el validador FIZZ", () => {
        const getvalidatorInScore = ExplorerController.getValidationInScore(3);
        expect(getvalidatorInScore.trick).toBe("FIZZ");
    });
    test("Requerimiento 11: Obtener el validador BUZZ", () => {
        const getvalidatorInScore = ExplorerController.getValidationInScore(5);
        expect(getvalidatorInScore.trick).toBe("BUZZ");
    });
    test("Requerimiento 12: Obtener el validador FIZZBUZZ", () => {
        const getvalidatorInScore = ExplorerController.getValidationInScore(15);
        expect(getvalidatorInScore.trick).toBe("FIZZBUZZ");
    });
});
