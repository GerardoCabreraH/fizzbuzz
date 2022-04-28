class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        const explorersAmountByMission = explorersInMission.length;
        return explorersAmountByMission;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMissionToGetUsernames = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInMission = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInMission;
    }
}

module.exports = ExplorerService;