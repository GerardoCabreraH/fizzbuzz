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
    test("Requerimiento 7: Obtener el validador tricks de explorers por node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        const getvalidatorInNode = explorersInNode.map((explorer) => ExplorerController.getValidationInExplorer(explorer));
        expect(getvalidatorInNode.length).toBe(10);
    });
    test("Requerimiento 8: Obtener el validador tricks de explorers por java", () => {
        const explorersInJava = ExplorerController.getExplorersByMission("java");
        const getvalidatorInJava = explorersInJava.map((explorer) => ExplorerController.getValidationInExplorer(explorer));
        expect(getvalidatorInJava.length).toBe(5);
    });
});
