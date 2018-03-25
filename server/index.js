"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("./config");
const hotel_route_1 = require("./routes/hotel.route");
class Server {
    constructor(port = 8008) {
        this.app = express();
        this.port = port;
        this.appConfig();
        this.setEndPoints();
    }
    appConfig() {
        config_1.Config.set(this.app);
    }
    setEndPoints() {
        const router = express.Router();
        this.app.use(router);
        hotel_route_1.Hotel.endPoint(router);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`API running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
