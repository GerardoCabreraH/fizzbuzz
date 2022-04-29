const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("./lib/data/explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("./lib/data/explorers.json");
        const usernamesExplorersInMision = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernamesExplorersInMision;
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("./lib/data/explorers.json");
        const amountExplorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return amountExplorersInMission;
    }

    static getValidationInExplorer(explorer) {
        const validatorExplorerInExplorer = FizzbuzzService.applyValidationInExplorer(explorer);
        return validatorExplorerInExplorer;
    }

    static getValidationInScore(score) {
        const validatorScoreInScore = FizzbuzzService.applyValidationInNumber(score);
        return validatorScoreInScore;
    }

    static getExplorersByStack(stack) {
        const explorers = Reader.readJsonFile("./lib/data/explorers.json");
        const explorersInStack = ExplorerService.filterByStack(explorers, stack);
        return explorersInStack;
    }
}

module.exports = ExplorerController;
