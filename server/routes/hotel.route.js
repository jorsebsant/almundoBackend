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
            const filterParam = req.query;
            const filtered = this.filterQuery(data, filterParam);
            res.json(filtered);
        });
    }
    static filterQuery(data, filterParam) {
        const filtered = _.filter(data, function (hotel) {
            if (!filterParam.stars && filterParam.stars != 0) {
                return hotel.name.toLowerCase().indexOf(filterParam.name.toLowerCase()) > -1;
            }
            else {
                return hotel.name.toLowerCase().indexOf(filterParam.name.toLowerCase()) > -1 &&
                    hotel.stars == filterParam.stars;
            }
        });
        return filtered;
    }
}
exports.Hotel = Hotel;
