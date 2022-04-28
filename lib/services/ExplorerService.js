class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        const explorersAmountByMission = explorersInMission.length;
        const amountExplorers = {
            mission: mission,
            quantity: explorersAmountByMission,
        };
        return amountExplorers;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMissionToGetUsernames = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInMission = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);
        const usernameExplorers = {
            mission: mission,
            explorers: usernamesInMission,
        };
        return usernameExplorers;
    }
}

module.exports = ExplorerService;