"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const asa = require('../data-sample/data.json');
class Hotel {
    static endPoint(router) {
        router.get("/api/hotel", (req, res, next) => {
            res.json(asa);
        });
    }
}
exports.Hotel = Hotel;
