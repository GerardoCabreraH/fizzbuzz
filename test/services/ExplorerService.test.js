const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
    const explorersByMission = [{ mission: "node" }];

    const explorersByStack = [{ stacks: ["javascript"] }];

    test("Requerimientos 1: calcular todos los explorers en una mision", () => {
        const explorersInNode = ExplorerService.filterByMission(explorersByMission, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimientos 2: obtener el mismo resultado de explorers en una mision", () => {
        const amountExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorersByMission, "node");
        expect(amountExplorersInNode).toBe(1);
    });

    test("Requerimientos 3: Obtener los usernames en una mision", () => {
        const usernamesExplorersInNode = ExplorerService.getExplorersUsernamesByMission(explorersByMission, "node");
        expect(usernamesExplorersInNode.length).toBe(1);
    });

    test("Obtener los explorers por stack", () => {
        const explorersInJavascript = ExplorerService.filterByStack(explorersByStack, "javascript");
        expect(explorersInJavascript.length).toBe(1);
    });
});