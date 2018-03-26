"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const response = require('../data-sample/data.json');
class Hotel {
    static endPoint(router) {
        router.get("/api/hotel", (req, res, next) => {
            res.json(response);
        });
        router.get("/api/hotel/search", (req, res, next) => {
            const data = response;
            const filterParam = req.query.name;
            const filtered = _.filter(data, function (hotel) {
                return hotel.name.indexOf(filterParam) > -1;
            });
            res.json(filtered);
        });
    }
}
exports.Hotel = Hotel;
