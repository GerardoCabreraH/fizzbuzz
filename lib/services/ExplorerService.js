class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        const explorersUsernames = explorersInMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }

    static filterByStack(explorers, stack) {
        const explorersInStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorersInStack;
    }
}

module.exports = ExplorerService;