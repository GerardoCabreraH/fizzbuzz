const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: mission, quantity: explorersInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: mission, explorers: explorersInMission});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = parseInt(request.params.score);
    const trickScore = ExplorerController.getValidationInScore(score);
    response.json({ score: score, trick: trickScore });
});

app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorersInStack = ExplorerController.getExplorersByStack(stack);
    response.json(explorersInStack);
});

module.exports = app;