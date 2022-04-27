const Reader = require("./lib/utils/Reader");
const ExplorerService = require('./lib/services/ExplorerService')
const FizzbuzzService = require('./lib/services/FizzbuzzService')
const explorers = Reader.readJsonFile("explorers.json"); 
console.log(explorers)

ExplorerService.filterByMission(explorers, "node");
console.log(ExplorerService.filterByMission(explorers, "node"));

ExplorerService.getAmountOfExplorersByMission(explorers, "node");
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));

ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));

const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1)

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3)

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5)

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15)
console.log(FizzbuzzService.applyValidationInExplorer(explorer1))
console.log(FizzbuzzService.applyValidationInExplorer(explorer3))
console.log(FizzbuzzService.applyValidationInExplorer(explorer5))
console.log(FizzbuzzService.applyValidationInExplorer(explorer15))

/*const explorersInNodeAndFizzTrick = ExplorerService.filterByMission(explorers, "node").map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
console.log(explorersInNodeAndFizzTrick)*/

/*const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => FizzbuzzService.assignFizzTrick(explorer));
const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => FizzbuzzService.assignBuzzTrick(explorer));
const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => FizzbuzzService.assignFizzBuzzTrick(explorer));*/

/*console.log(explorersInNode)
console.log(quantityOfExplorers)
console.log(usernamesInNode)*/

/*console.log(explorersInNodeAndFizzTrick)
console.log(explorersInNodeAndBuzzTrick)
console.log(explorersInNodeAndFizzBuzzTrick)*/
