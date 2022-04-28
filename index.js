const app = require("./lib/server");

const start = (port) => {
    try {
        app.listen(port, () => {
            console.log(`FizzBuzz API in localhost:${port}`);
        });
    } catch (err) {
        console.error(err);
    }
};

start(3000);