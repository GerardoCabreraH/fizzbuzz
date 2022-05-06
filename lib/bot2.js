const ExplorerController = require("./controllers/ExplorerController");
const TelegramConfig = require("./utils/Telegram");

const bot = TelegramConfig.configBot();

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const mission = msg.text;
    if(mission === "node"){    
        const explorers = ExplorerController.getExplorersByMission(mission);
        const list = explorers.map((explorer) => {
            `Nombre: ${explorer.name}, Score: ${explorer.score}`;
        });
        bot.sendMessage(chatId, list);
    } else if(mission === "java"){    
        const explorers = ExplorerController.getExplorersByMission(mission);
        const list = explorers.map((explorer) => {
            `Nombre: ${explorer.name}, Score: ${explorer.score}`;
        });
        bot.sendMessage(chatId, list);
    } else{
        bot.sendMessage(chatId, "Envía un mision válida");
    }
});
