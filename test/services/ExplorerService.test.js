const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
    const explorersByMission = [{ mission: "node" }];

    test("Requerimiento 1: calcular todos los explorers en una mision", () => {
        const explorersInNode = ExplorerService.filterByMission(explorersByMission, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: obtener el mismo resultado de explorers en una mision", () => {
        const amountExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorersByMission, "node");
        expect(amountExplorersInNode).toBe(1);
    });

    test("Requerimiento 3: Obtener los usernames en una mision", () => {
        const usernamesExplorersInNode = ExplorerService.getExplorersUsernamesByMission(explorersByMission, "node");
        expect(usernamesExplorersInNode.length).toBe(1);
    });
});