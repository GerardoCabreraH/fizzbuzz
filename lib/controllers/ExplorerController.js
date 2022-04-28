const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesExplorersInMision = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernamesExplorersInMision;
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const amountExplorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return amountExplorersInMission;
    }

    static getValidationInExplorer(explorer) {
        const validatorExplorerInMission = FizzbuzzService.applyValidationInExplorer(explorer);
        return validatorExplorerInMission;
    }
}

module.exports = ExplorerController;
