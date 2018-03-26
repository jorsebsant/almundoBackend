import { NextFunction, Request, Response, Router } from "express"
const underscore = require("underscore");
const response = require('../data-sample/data.json');
export class Hotel {
  public static endPoint(router: Router) {
    router.get("/api/hotel", (req: Request, res: Response, next: NextFunction) => {
      res.json(response);
    });

    router.get("/api/hotel/search", (req: Request, res: Response, next: NextFunction) => {
      const data = response;
      const filterParam = req.query.query;
      const filtered = underscore.where(data, {id: "249942"});
      res.json(filtered);
    });
  }

}