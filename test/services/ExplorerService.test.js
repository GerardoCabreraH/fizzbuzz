const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Test para ExplorerService", () => {
    const explorers = [{mission: "node"}]
    test("Requerimientos 1: calcular todos los explorers en una mision", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1)
    })

    test("Requerimientos 2: obtener el mismo resultado de explorers en una mision", () => {
        const amountExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amountExplorersInNode).toBe(1)
    })

    test("Requerimientos 3: Obtener los usernames en una mision", () => {
        const usernamesExplorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
        expect(usernamesExplorersInNode.length).toBe(1)
    })
})