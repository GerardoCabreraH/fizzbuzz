const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
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
        expect(explorersInNode.length).toBe(10);
    });

    test("Requerimiento 4: Obtener usernames por java", () => {
        const explorersInJava = ExplorerController.getExplorersUsernamesByMission("java");
        expect(explorersInJava.length).toBe(5);
    });

    test("Requerimiento 5: Obtener el numero de explorers por node", () => {
        const explorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersInNode).toBe(10);
    });

    test("Requerimiento 6: Obtener el numero de explorers por java", () => {
        const explorersInJava = ExplorerController.getExplorersAmonutByMission("java");
        expect(explorersInJava).toBe(5);
    });

    test("Requerimiento 7: Obtener el validador score", () => {
        const getvalidatorInScore = ExplorerController.getValidationInScore(1);
        expect(getvalidatorInScore).toBe(1);
    });

    test("Requerimiento 8: Obtener el validador FIZZ", () => {
        const getvalidatorInScore = ExplorerController.getValidationInScore(3);
        expect(getvalidatorInScore).toBe("FIZZ");
    });

    test("Requerimiento 9: Obtener el validador BUZZ", () => {
        const getvalidatorInScore = ExplorerController.getValidationInScore(5);
        expect(getvalidatorInScore).toBe("BUZZ");
    });

    test("Requerimiento 10: Obtener el validador FIZZBUZZ", () => {
        const getvalidatorInScore = ExplorerController.getValidationInScore(15);
        expect(getvalidatorInScore).toBe("FIZZBUZZ");
    });

    test("Requerimiento 11: Obtener explorers por Javascript", () => {
        const explorersInJavascript = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInJavascript.length).toBe(11);
    });

    test("Requerimiento 12: Obtener explorers por ReasonML", () => {
        const explorersInReasonML = ExplorerController.getExplorersByStack("reasonML");
        expect(explorersInReasonML.length).toBe(9);
    });

    test("Requerimiento 13: Obtener explorers por Elm", () => {
        const explorersInElm = ExplorerController.getExplorersByStack("elm");
        expect(explorersInElm.length).toBe(12);
    });

    test("Requerimiento 14: Obtener explorers por Groovy", () => {
        const explorersInGroovy = ExplorerController.getExplorersByStack("groovy");
        expect(explorersInGroovy.length).toBe(9);
    });

    test("Requerimiento 15: Obtener explorers por Elixir", () => {
        const explorersInElixir = ExplorerController.getExplorersByStack("elixir");
        expect(explorersInElixir.length).toBe(9);
    });
});
