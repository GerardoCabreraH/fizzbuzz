const express = require("express");

class ExpressConfig {
    static startExpress() {
        const app = express();
        return app.use(express.json());
    }
}

module.exports = ExpressConfig;
