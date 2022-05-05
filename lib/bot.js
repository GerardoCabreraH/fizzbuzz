const ExplorerController = require("./controllers/ExplorerController");
const TelegramConfig = require("./utils/Telegram")

const bot = TelegramConfig.configBot();

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

/*bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.getValidationInScore(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const mission = msg.text;
    if(mission === "node"){    
        const explorers = ExplorerController.getExplorersByMission(mission);
        explorers.map((explorer) => {
            bot.sendMessage(chatId, explorer.name);
        });
    } if(mission === "java"){    
        const explorers = ExplorerController.getExplorersByMission(mission);
        explorers.map((explorer) => {
            bot.sendMessage(chatId, explorer.name);
        });
    } else{
        bot.sendMessage(chatId, "Envía un mision válida");
    }
});*/

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = parseInt(msg.text);

    if (!isNaN(text)) {
        const fizzbuzzTrick = ExplorerController.getValidationInScore(text);
        const responseBot = `Tu número es: ${text}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else if (isNaN(text)) {
        if(text === "node"){    
            const explorers = ExplorerController.getExplorersByMission(text);
            explorers.map((explorer) => {
                bot.sendMessage(chatId, explorer.name);
            });
        } else if(text === "java"){    
            const explorers = ExplorerController.getExplorersByMission(text);
            explorers.map((explorer) => {
                bot.sendMessage(chatId, explorer.name);
            });
        }
    }
    else {
        bot.sendMessage(chatId, "Envía un numero o una mision válida");
    }
});