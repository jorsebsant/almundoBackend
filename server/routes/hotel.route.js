"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const underscore = require("underscore");
const response = require('../data-sample/data.json');
class Hotel {
    static endPoint(router) {
        router.get("/api/hotel", (req, res, next) => {
            res.json(response);
        });
        router.get("/api/hotel/search", (req, res, next) => {
            const data = response;
            const filterParam = req.query.query;
            console.log(filterParam);
            const filtered = underscore.where(data, { id: "249942" });
            res.json(filtered);
        });
    }
}
exports.Hotel = Hotel;
