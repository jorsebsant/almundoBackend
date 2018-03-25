"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
class Config {
    static set(app) {
        app = app;
        app.use(bodyParser.json());
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', ' GET,PUT,POST,DELETE');
            next();
        });
    }
}
exports.Config = Config;
