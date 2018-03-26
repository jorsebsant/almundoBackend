import { NextFunction, Request, Response, Router } from "express"
const _ = require("underscore");
const response = require('../data-sample/data.json');
export class Hotel {
  public static endPoint(router: Router) {
    router.get("/api/hotel", (req: Request, res: Response, next: NextFunction) => {
      res.json(response);
    });

    router.get("/api/hotel/search", (req: Request, res: Response, next: NextFunction) => {
      const data = response;
      const filterParam = req.query.name;
      const filtered = _.filter(data, function(hotel) {
        return hotel.name.indexOf(filterParam) > -1;
      });
      res.json(filtered);
    });
  }

}