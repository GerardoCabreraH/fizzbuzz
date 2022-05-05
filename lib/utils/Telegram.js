require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

class TelegramConfig {
    static configBot() {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        return new TelegramBot(token, { polling: true });
    }
}

module.exports = TelegramConfig;
